export default function Section({ id, title, eyebrow, children, className = '' }) {
return (
<section id={id} className={`py-12 md:py-16 ${className}`}>
<div className="mx-auto max-w-6xl px-4">
{eyebrow && (
<div className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-700">
{eyebrow}
</div>
)}
{title && (
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">{title}</h2>
)}
{children}
</div>
</section>
);
}