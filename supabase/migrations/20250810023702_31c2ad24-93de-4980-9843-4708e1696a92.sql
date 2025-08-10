-- Create table for NRI subscribers (subset of customers)
CREATE TABLE IF NOT EXISTS public.nri_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT,
  help_with TEXT NOT NULL,
  service_type TEXT,
  description TEXT
);

-- Enable Row Level Security
ALTER TABLE public.nri_subscribers ENABLE ROW LEVEL SECURITY;

-- Policies: allow inserts and reads for everyone (edge functions run with anon key)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'nri_subscribers' AND policyname = 'Anyone can insert subscribers'
  ) THEN
    CREATE POLICY "Anyone can insert subscribers"
    ON public.nri_subscribers
    FOR INSERT
    WITH CHECK (true);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'nri_subscribers' AND policyname = 'Users can view all subscribers'
  ) THEN
    CREATE POLICY "Users can view all subscribers"
    ON public.nri_subscribers
    FOR SELECT
    USING (true);
  END IF;
END $$;

-- Timestamp trigger
CREATE TRIGGER update_nri_subscribers_updated_at
BEFORE UPDATE ON public.nri_subscribers
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();