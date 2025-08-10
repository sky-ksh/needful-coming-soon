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

function html(inner: string, status = 200) {
  const content = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Unsubscribe | Needful</title>
  <meta name="description" content="Confirm your email unsubscribe from Needful." />
  <link rel="canonical" href="https://ieoqhrvblvxppwcdbvrm.functions.supabase.co/nri-unsubscribe" />
  <style>body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;color:#111;background:#fff}</style>
</head>
<body>
${inner}
</body>
</html>`;
  return new Response(content, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
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
      return new Response(null, { status: 303, headers: { Location: 'https://needfulusa.com/unsubscribed?status=missing-token', ...corsHeaders } });
    }

    // Basic UUID v4 validation
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(token)) {
      return new Response(null, { status: 303, headers: { Location: 'https://needfulusa.com/unsubscribed?status=invalid-token', ...corsHeaders } });
    }

    const { error } = await supabaseAdmin
      .from('nri_community_signups')
      .delete()
      .eq('unsubscribe_token', token);

    if (error) {
      console.error('Unsubscribe delete error:', error);
      return new Response(null, { status: 303, headers: { Location: 'https://needfulusa.com/unsubscribed?status=server-error', ...corsHeaders } });
    }

      return new Response(null, { status: 303, headers: { Location: 'https://needfulusa.com/unsubscribed?status=success', ...corsHeaders } });
  } catch (e) {
    console.error('Unsubscribe handler error:', e);
    return new Response(null, { status: 303, headers: { Location: 'https://needfulusa.com/unsubscribed?status=unexpected-error', ...corsHeaders } });
  }
});