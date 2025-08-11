-- Drop overly permissive SELECT policies to protect lead data
DROP POLICY IF EXISTS "Users can view all signups" ON public.nri_community_signups;
DROP POLICY IF EXISTS "Users can view all consultation requests" ON public.business_consultation_requests;