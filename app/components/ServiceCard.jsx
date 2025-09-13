export default function ServiceCard({ service }) {
return (
<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
<h3 className="text-lg font-semibold tracking-tight">{service.name}</h3>
<p className="text-gray-700 mt-2">{service.deliverable}</p>
<div className="mt-3 text-sm text-gray-600">Timeline: {service.timeline}</div>
<ul className="mt-3 list-disc pl-6 text-sm text-gray-700 space-y-1">
{service.items.map((it, i) => (<li key={i}>{it}</li>))}
</ul>
</div>
);
}