import Badge from './Badge';
import Button from './Button';


export default function ProjectCard({ project }) {
return (
<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-soft">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
<p className="text-sm text-gray-600 mt-1">{project.role} • {project.stack}</p>
</div>
<Badge>{project.year}</Badge>
</div>
<p className="text-gray-700 mt-3">{project.summary}</p>
<ul className="mt-3 list-disc pl-6 text-sm text-gray-700 space-y-1">
{project.bullets.map((b, i) => (<li key={i}>{b}</li>))}
</ul>
<div className="mt-4 flex gap-3">
{project.link && <Button href={project.link} variant="ghost">Live</Button>}
{project.repo && <Button href={project.repo} variant="ghost">Code</Button>}
{project.caseStudy && <Button href={project.caseStudy}>Case Study</Button>}
</div>
</div>
);
}