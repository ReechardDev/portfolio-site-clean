'use client';
import { useState } from 'react';
import Button from './Button';


const nav = [
{ href: '/', label: 'Home' },
{ href: '/work', label: 'Work' },
{ href: '/services', label: 'Services' },
{ href: '/about', label: 'About' },
{ href: '/resources', label: 'Resources' },
{ href: '/articles', label: 'Articles' },
{ href: '/contact', label: 'Contact' }
];


export default function Header() {
const [open, setOpen] = useState(false);
return (
<header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur">
<div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
<a href="/" className="font-semibold tracking-tight">Inemesit David</a>
<nav className="hidden md:flex items-center gap-6 text-sm">
{nav.map(n => (
<a key={n.href} href={n.href} className="hover:text-brand-700">{n.label}</a>
))}
<Button href="/contact">Let’s work</Button>
</nav>
<button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2"/></svg>
</button>
</div>
{open && (
<div className="md:hidden border-t border-gray-200 bg-white">
<div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
{nav.map(n => (
<a key={n.href} href={n.href} className="py-1" onClick={() => setOpen(false)}>{n.label}</a>
))}
<Button href="/contact" onClick={() => setOpen(false)}>Let’s work</Button>
</div>
</div>
)}
</header>
);
}