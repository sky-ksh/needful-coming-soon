-- Create storage for the RESEND_API_KEY secret
-- This will be handled by Supabase secrets, but we're documenting the intent

-- Update the nri_community_signups table to match the NRISolutions form structure
ALTER TABLE public.nri_community_signups 
ADD COLUMN IF NOT EXISTS service_type text,
ADD COLUMN IF NOT EXISTS description text;

-- Update the business_consultation_requests table structure to ensure it matches
-- The table already has the right columns, so no changes needed