import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";

export const metadata = { title: "Articles – Inemesit David" };

const posts = [
  { title: "Service Website IA: How to Make it Obvious", date: "2025-08-20", href: "#" },
  { title: "GA4 Events to Track for Local Services", date: "2025-08-28", href: "#" },
  { title: "Tailwind Component Rhythm for Readability", date: "2025-09-01", href: "#" }
];

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <Section title="Articles" eyebrow="Short, practical notes">
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {posts.map((p) => (
            <a key={p.title} href={p.href} className="flex items-center justify-between p-5 hover:bg-gray-50">
              <div>
                <div className="font-semibold">{p.title}</div>
                <div className="text-sm text-gray-600">{new Date(p.date).toDateString()}</div>
              </div>
              <span>→</span>
            </a>
          ))}
        </div>
      </Section>
      <Footer />
    </>
  );
}