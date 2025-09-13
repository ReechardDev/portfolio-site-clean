'use client';
import { useState } from 'react';
import Button from '../components/Button';


export default function ContactForm() {
const [status, setStatus] = useState('idle');


async function onSubmit(e) {
e.preventDefault();
setStatus('loading');
const form = new FormData(e.currentTarget);
const payload = Object.fromEntries(form.entries());
try {
const res = await fetch('/api/contact', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(payload)
});
if (!res.ok) throw new Error('Network error');
setStatus('success');
e.currentTarget.reset();
} catch (e) {
setStatus('error');
}
}


return (
<form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="text-sm">Name</label>
<input name="name" required className="mt-1 w-full rounded-xl2 border border-gray-300 px-3 py-2" />
</div>
<div>
<label className="text-sm">Email</label>
<input type="email" name="email" required className="mt-1 w-full rounded-xl2 border border-gray-300 px-3 py-2" />
</div>
<div className="md:col-span-2">
<label className="text-sm">Message</label>
<textarea name="message" rows="4" required className="mt-1 w-full rounded-xl2 border border-gray-300 px-3 py-2" />
</div>
</div>
<div className="mt-4">
<Button>Send</Button>
</div>
{status === 'success' && (
<p className="mt-3 text-sm text-green-700">Thanks! I’ll get back to you shortly.</p>
)}
{status === 'error' && (
<p className="mt-3 text-sm text-red-700">Something went wrong. You can also email me directly.</p>
)}
</form>
);
}