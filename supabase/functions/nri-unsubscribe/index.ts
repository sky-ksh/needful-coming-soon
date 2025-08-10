import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

function html(body: string, status = 200) {
  return new Response(body, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      ...corsHeaders,
    },
  });
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

  try {
    const url = new URL(req.url);
    const token = url.searchParams.get('token')?.trim();

    if (!token) {
      return html(`<h1>Unsubscribe</h1><p>Missing token.</p>`, 400);
    }

    // Basic UUID v4 validation
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(token)) {
      return html(`<h1>Unsubscribe</h1><p>Invalid token.</p>`, 400);
    }

    const { error } = await supabaseAdmin
      .from('nri_subscribers')
      .delete()
      .eq('unsubscribe_token', token);

    if (error) {
      console.error('Unsubscribe delete error:', error);
      return html(`<h1>Unsubscribe</h1><p>We couldn't process your request right now. Please try again later.</p>`, 500);
    }

    return html(`
      <main style="max-width:560px;margin:48px auto;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;color:#111;padding:0 16px">
        <h1 style="font-size:24px;margin-bottom:12px">You're unsubscribed</h1>
        <p style="font-size:16px;line-height:1.6;margin:0 0 8px">You will no longer receive emails from Needful at this address.</p>
        <p style="font-size:14px;color:#666;line-height:1.6;margin:0">If this was a mistake, just submit the form again to re-subscribe.</p>
      </main>
    `);
  } catch (e) {
    console.error('Unsubscribe handler error:', e);
    return html(`<h1>Unsubscribe</h1><p>Unexpected error.</p>`, 500);
  }
});