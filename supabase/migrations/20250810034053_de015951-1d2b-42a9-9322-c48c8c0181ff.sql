-- Revert unsubscribe feature: drop the subscribers table if present
DROP TABLE IF EXISTS public.nri_subscribers CASCADE;