// app/api/contact/route.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = process.env.CONTACT_TO_EMAIL; // your inbox

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [TO],
      reply_to: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Email send failed" }), { status: 500 });
  }
}
