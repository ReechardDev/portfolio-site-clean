import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';


export const metadata = { title: 'Services – Inemesit David' };


export default function ServicesPage() {
return (
<>
<Header />
<Section title="Services" eyebrow="What I deliver">
<div className="grid md:grid-cols-2 gap-6">
{services.map((s) => (<ServiceCard key={s.name} service={s} />))}
</div>
</Section>
<Footer />
</>
);
}