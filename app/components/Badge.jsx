export default function Badge({ children }) {
return (
<span className="inline-flex items-center rounded-full bg-brand-50 text-brand-700 border border-brand-100 px-3 py-1 text-xs font-medium">
{children}
</span>
);
}