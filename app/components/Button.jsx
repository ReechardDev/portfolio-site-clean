export default function Button({ href = '#', children, variant = 'primary', className = '', ...props }) {
const base = 'inline-flex items-center justify-center gap-2 rounded-xl2 px-4 py-2 text-sm md:text-base font-medium shadow-soft transition';
const styles = {
primary: 'bg-brand-600 text-white hover:bg-brand-700',
ghost: 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-200',
link: 'text-brand-700 hover:underline shadow-none px-0'
};
if (props.onClick) {
return (
<button className={`${base} ${styles[variant]} ${className}`} {...props}>
{children}
</button>
);
}
return (
<a href={href} className={`${base} ${styles[variant]} ${className}`} {...props}>
{children}
</a>
);
}