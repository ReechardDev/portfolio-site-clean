export default function Footer() {
return (
<footer className="border-t border-gray-200 bg-white">
<div className="mx-auto max-w-6xl px-4 py-8 text-sm grid md:grid-cols-3 gap-6">
<div>
<div className="font-semibold">Inemesit David</div>
<p className="text-gray-600 mt-2">Web Designer/Developer • Digital Marketing & Creative Tech</p>
</div>
<div className="flex flex-col gap-2">
<a href="/work" className="hover:underline">Work</a>
<a href="/services" className="hover:underline">Services</a>
<a href="/about" className="hover:underline">About</a>
<a href="/articles" className="hover:underline">Articles</a>
</div>
<div className="text-gray-600">
<div>Accra, Ghana • Works remotely with U.S. teams (Denver)</div>
<div className="mt-2">© {new Date().getFullYear()} Inemesit David</div>
</div>
</div>
</footer>
);
}