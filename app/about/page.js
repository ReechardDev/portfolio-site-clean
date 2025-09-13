import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import SkillPill from '../components/SkillPill';
import { softSkills, hardSkills } from '../data/skills';


export const metadata = { title: 'About – Inemesit David' };


export default function AboutPage() {
return (
<>
<Header />
<Section title="About" eyebrow="Who I am">
<div className="prose max-w-none">
<p>
I’m a web designer/developer and digital marketer who builds clean, conversion-ready websites with Next.js and Tailwind. I care about simple UX, clear copy, and measurable results. I’ve rebuilt service business sites (senior care, landscaping, Bread Store, Affiliate Marketing link site), created reusable design systems in Canva, and set up GA4 tracking to see what actually moves the numbers. My process is: audit → structure the content → design components → wire analytics → ship and iterate. I’m based in Accra and collaborate smoothly with U.S. teams (Denver). If you need a fast, focused site revamp or an MVP you can launch this week., let’s ship it.
</p>
</div>
<div className="mt-6 grid md:grid-cols-2 gap-8">
<div>
<h3 className="text-lg font-semibold mb-3">Hard Skills</h3>
<div className="flex flex-wrap gap-2">
{hardSkills.map((s) => (<SkillPill key={s} label={s} />))}
</div>
</div>
<div>
<h3 className="text-lg font-semibold mb-3">Soft Skills</h3>
<div className="flex flex-wrap gap-2">
{softSkills.map((s) => (<SkillPill key={s} label={s} />))}
</div>
</div>
</div>
</Section>
<Footer />
</>
);
}