import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';


export const metadata = { title: 'Work – Inemesit David' };


export default function WorkPage() {
return (
<>
<Header />
<Section title="Work" eyebrow="Portfolio">
<p className="text-gray-700 mb-6 max-w-prose">
Case cards below summarize role, stack, and actions. Detailed case studies can be added per project.
</p>
<div className="grid md:grid-cols-2 gap-6">
{projects.map((p) => (<ProjectCard key={p.title} project={p} />))}
</div>
</Section>
<Footer />
</>
);
}