import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';


export const metadata = { title: 'Resources – Inemesit David' };


const resources = [
{ title: 'Free Website Audit Checklist (PDF)', desc: 'Quick checks for IA, speed, metadata, and CTAs.', href: '#' },
{ title: 'GA4 Event Map Template (Sheet)', desc: 'Plan events, conversions, and UTM tags.', href: '#' },
{ title: 'Canva Post/Flyer Starter Pack', desc: 'Reusable layout system for service businesses.', href: '#' }
];


export default function ResourcesPage() {
return (
<>
<Header />
<Section title="Resources" eyebrow="Freebies & tools">
<div className="grid md:grid-cols-3 gap-6">
{resources.map((r) => (
<a key={r.title} href={r.href} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft hover:border-brand-200">
<h3 className="font-semibold tracking-tight">{r.title}</h3>
<p className="text-sm text-gray-700 mt-2">{r.desc}</p>
</a>
))}
</div>
</Section>
<Footer />
</>
);
}