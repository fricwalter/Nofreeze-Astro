// Cloudflare Pages Function — handles the contact form and sends an email via Resend.
//
// Required environment variables (set in the Pages project settings):
//   RESEND_API_KEY  – your Resend API key (secret)
// Optional:
//   CONTACT_TO      – recipient address (default: admirfric@gmail.com)
//   CONTACT_FROM    – verified sender (default: "NoFreeze Kontakt <onboarding@resend.dev>")
//                     Once nofreeze.pro is verified in Resend, set e.g. "NoFreeze <noreply@nofreeze.pro>".

interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
      // honeypot field — must stay empty for real users
      company?: string;
    };

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const message = (body.message || '').trim();

    // Simple spam honeypot
    if (body.company) return json({ message: 'OK' }, 200);

    if (!name || !email || !message) {
      return json({ error: 'Bitte füllen Sie alle Felder aus.' }, 400);
    }
    if (!isValidEmail(email)) {
      return json({ error: 'Bitte geben Sie eine gültige E-Mail-Adresse an.' }, 400);
    }
    if (message.length > 5000) {
      return json({ error: 'Die Nachricht ist zu lang.' }, 400);
    }

    if (!env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured.');
      return json({ error: 'Serverkonfiguration fehlt. Bitte kontaktieren Sie uns per WhatsApp.' }, 500);
    }

    const to = env.CONTACT_TO || 'admirfric@gmail.com';
    const from = env.CONTACT_FROM || 'NoFreeze Kontakt <onboarding@resend.dev>';

    const html = `
      <h2>Neue Kontaktanfrage – nofreeze.pro</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Nachricht:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Kontaktanfrage von ${name} – nofreeze.pro`,
        html,
      }),
    });

    if (resendResponse.ok) {
      return json({ message: 'Vielen Dank! Ihre Nachricht wurde gesendet. Wir melden uns in Kürze.' }, 200);
    }

    const errText = await resendResponse.text();
    console.error('Resend error:', resendResponse.status, errText);
    return json({ error: 'Versand fehlgeschlagen. Bitte kontaktieren Sie uns per WhatsApp.' }, 502);
  } catch (err) {
    console.error('contact function error:', err);
    return json({ error: 'Interner Serverfehler.' }, 500);
  }
};
