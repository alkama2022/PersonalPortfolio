DROP POLICY IF EXISTS "Allow anonymous visitors to submit contact messages" ON public.contact_messages;

CREATE POLICY "Anonymous contact submissions with validation"
ON public.contact_messages
FOR INSERT
TO anon
WITH CHECK (
  name IS NOT NULL AND
  email IS NOT NULL AND
  subject IS NOT NULL AND
  message IS NOT NULL AND
  length(trim(name)) > 0 AND
  length(trim(email)) > 0 AND
  length(trim(subject)) > 0 AND
  length(trim(message)) > 0 AND
  length(message) <= 1000
);