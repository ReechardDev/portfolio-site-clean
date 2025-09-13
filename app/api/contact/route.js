export async function POST(request) {
const data = await request.json();
// In real life, send email via a service (Resend, SendGrid) or store in DB.
// For now, just log on server and return OK.
console.log('Contact message:', data);
return new Response(JSON.stringify({ ok: true }), { status: 200 });
}