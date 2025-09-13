export default function Testimonial({ t }) {
return (
<figure className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
<blockquote className="text-gray-800">“{t.quote}”</blockquote>
<figcaption className="mt-3 text-sm text-gray-600">— {t.author}, {t.context}</figcaption>
</figure>
);
}