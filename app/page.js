import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import Button from './components/Button';
import SkillPill from './components/SkillPill';
import ProjectCard from './components/ProjectCard';
import Testimonial from './components/Testimonial';
import { hardSkills } from './data/skills';
import { projects } from './data/projects';
import { testimonials } from './data/testimonials';


export default function HomePage() {
return (
<>
<Header />


{/* Hero */}
<Section className="pt-10 md:pt-16 bg-white/60">
<div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
<div>
<div className="text-sm font-medium text-brand-700">Web Designer/Dev • Digital Marketing</div>
<h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
I build clean, conversion‑ready websites in Next.js & Tailwind.
</h1>
<p className="mt-4 text-gray-700 max-w-prose">
I turn ideas into polished products—clear UX, strong on‑page SEO, and measurable outcomes with modern analytics.
Based in Accra, collaborating with U.S. teams (Denver).
</p>
<div className="mt-6 flex flex-wrap gap-3">
<Button href="/work">See my work</Button>
<Button href="/contact" variant="ghost">Start a project</Button>
</div>
</div>
<div className="rounded-2xl bg-heroTint/40 border border-heroTint/60 h-56 md:h-72 shadow-soft" />
</div>
</Section>


{/* Skills */}
<Section eyebrow="Skills" title="Hard skills I use to ship">
<div className="flex flex-wrap gap-2">
{hardSkills.map((s) => (<SkillPill key={s} label={s} />))}
</div>
</Section>


{/* Featured Projects */}
<Section eyebrow="Projects" title="Selected work">
<div className="grid md:grid-cols-2 gap-6">
{projects.slice(0, 4).map((p) => (<ProjectCard key={p.title} project={p} />))}
</div>
<div className="mt-6">
<Button href="/work" variant="link">Browse all projects →</Button>
</div>
</Section>


{/* Testimonials */}
<Section eyebrow="Proof" title="What collaborators say">
<div className="grid md:grid-cols-2 gap-6">
{testimonials.map((t, i) => (<Testimonial key={i} t={t} />))}
</div>
</Section>


{/* CTA */}
<Section className="bg-white">
<div className="rounded-2xl border border-gray-200 p-8 text-center shadow-soft">
<h3 className="text-2xl font-semibold tracking-tight">Have a service website to revamp?</h3>
<p className="text-gray-700 mt-2">I can ship a focused MVP in 7–14 days with GA4 tracking and clean UX.</p>
<div className="mt-5 flex justify-center gap-3">
<Button href="/contact">Revamp my site</Button>
<Button href="/services" variant="ghost">See services</Button>
</div>
</div>
</Section>


<Footer />
</>
);
}