CREATE TABLE public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz default now(),
  is_read boolean default false
);

GRANT INSERT ON public.contact_messages TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contact_messages TO authenticated;
GRANT ALL ON public.contact_messages TO service_role;

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous visitors to submit contact messages"
ON public.contact_messages
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read all contact messages"
ON public.contact_messages
FOR SELECT
TO authenticated
USING (true);