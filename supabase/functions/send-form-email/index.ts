import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_ANON_KEY') ?? ''
)

interface NRIFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  description?: string;
}

interface EnterpriseFormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  companyName: string;
  jobTitle: string;
  companySize: string;
  needs: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formData, formType }: { formData: NRIFormData | EnterpriseFormData, formType: 'nri' | 'enterprise' } = await req.json();

    console.log(`Processing ${formType} form submission:`, formData);

    if (formType === 'nri') {
      const nriData = formData as NRIFormData;
      
      // Store in Supabase
      const { error: dbError } = await supabase
        .from('nri_community_signups')
        .insert({
          full_name: nriData.name,
          email: nriData.email,
          phone_number: nriData.phone || null,
          help_with: nriData.service,
          service_type: nriData.service,
          description: nriData.description || null
        });

      if (dbError) {
        console.error('Database error:', dbError);
        throw new Error('Failed to save form data');
      }

      // Send thank you email
      const emailResponse = await resend.emails.send({
        from: "Needful <onboarding@resend.dev>",
        to: [nriData.email],
        subject: "Welcome to the Needful Community!",
        html: `
          <h1>Thank you for joining, ${nriData.name}!</h1>
          <p>We're excited to have you in the Needful community. We received your request for help with <strong>${nriData.service}</strong>.</p>
          <p>Our team will review your submission and get back to you soon with personalized assistance.</p>
          
          <p>If you'd like help with your OCI application, we can assist! To speed up the process, please tell us more about who's applying (for e.g. minor, previous Indian citizen, spouse of an Indian citizen, etc.) and send us copies of your documents. Copies of the below documents are typically needed for OCI applications:</p>
          
          <ol>
            <li>Copy of your current passport (info page + amendments page)</li>
            <li>Copy of your previous Indian passport if available (info page + last two pages)</li>
            <li>Copy of your naturalization certificate</li>
            <li>Copy of your Indian passport's surrender certificate (if you haven't surrendered your Indian passport yet, we can help with that too! Just send the other docs in this list)</li>
            <li>Proof of address (driver's license, utility bill, etc.)</li>
            <li>Proof of employment or current enrollment at a university</li>
            <li>Your signature on a blank page</li>
            <li>Copy / scan of a recent 2x2 passport pic</li>
            <li>Copy of marriage certificate, if married</li>
            <li>Copy of birth certificate, if applying for minor</li>
            <li>Spouse's passport copy, if applying as a spouse</li>
            <li>Address of your current employer or college</li>
          </ol>
          
          <p>Please also share your current mailing address to which you will want to receive your OCI card.</p>
          
          <p>In the meantime, feel free to reply to this email if you have any questions.</p>
          <p>Best regards,<br>The Needful Team</p>
        `,
      });

      console.log("NRI email sent successfully:", emailResponse);

    } else if (formType === 'enterprise') {
      const enterpriseData = formData as EnterpriseFormData;
      
      // Store in Supabase
      const { error: dbError } = await supabase
        .from('business_consultation_requests')
        .insert({
          first_name: enterpriseData.firstName,
          last_name: enterpriseData.lastName,
          work_email: enterpriseData.workEmail,
          company_name: enterpriseData.companyName,
          job_title: enterpriseData.jobTitle,
          company_size: enterpriseData.companySize,
          needs_description: enterpriseData.needs
        });

      if (dbError) {
        console.error('Database error:', dbError);
        throw new Error('Failed to save form data');
      }

      // Send thank you email
      const emailResponse = await resend.emails.send({
        from: "Needful <onboarding@resend.dev>",
        to: [enterpriseData.workEmail],
        subject: "Your Free Consultation Request - Needful",
        html: `
          <h1>Thank you for your interest, ${enterpriseData.firstName}!</h1>
          <p>We've received your consultation request for ${enterpriseData.companyName}.</p>
          <p>Our enterprise team will review your needs and reach out within 24 hours to schedule your free consultation.</p>
          <p><strong>What's next:</strong></p>
          <ul>
            <li>Our team will analyze your specific requirements</li>
            <li>We'll prepare a customized demo based on your company size (${enterpriseData.companySize})</li>
            <li>Schedule a call to discuss how Needful can transform your NRI customer experience</li>
          </ul>
          <p>Questions? Simply reply to this email.</p>
          <p>Best regards,<br>The Needful Enterprise Team</p>
        `,
      });

      console.log("Enterprise email sent successfully:", emailResponse);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-form-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);