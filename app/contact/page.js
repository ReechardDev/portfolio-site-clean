import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import ContactForm from './ContactForm';
import Button from '../components/Button';
import { SITE } from '../lib/site';


export const metadata = { title: 'Contact – Inemesit David' };


export default function ContactPage() {
return (
<>
<Header />
<Section title="Contact" eyebrow="Let’s work together">
<div className="grid md:grid-cols-2 gap-8 items-start">
<ContactForm />
<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
<h3 className="font-semibold tracking-tight">Other ways</h3>
<div className="mt-3 text-sm text-gray-700 space-y-2">
<div>Email: <a className="text-brand-700 hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
<div>Phone: <a className="text-brand-700 hover:underline" href={SITE.phoneLink}>{SITE.phoneDisplay}</a></div>
<div>WhatsApp: <a className="text-brand-700 hover:underline" href={SITE.whatsapp}>Chat</a></div>
</div>
<div className="mt-4 flex gap-3">
<Button href={SITE.socials.linkedin} variant="ghost">LinkedIn</Button>
<Button href={SITE.socials.github} variant="ghost">GitHub</Button>
<Button href={SITE.socials.x} variant="ghost">X</Button>
</div>
</div>
</div>
</Section>
<Footer />
</>
);
}