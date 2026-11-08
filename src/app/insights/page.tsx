import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insights & Technical Perspectives | Techverge Africa Ltd',
  description:
    'In-depth engineering analyses, cloud architecture whitepapers, and artificial intelligence perspectives for modern African enterprises.',
};

const articles = [
  {
    slug: 'scaling-fintech-infrastructure-west-africa',
    title: 'Architecting for High Concurrency: Lessons from West African Fintech Systems',
    category: 'Software Engineering',
    readTime: '6 min read',
    date: 'October 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    excerpt:
      'How distributed transactional databases, idempotency protocols, and asynchronous webhook queues maintain 99.99% payment integrity during mobile money network surges.',
  },
  {
    slug: 'sovereign-ai-on-premise-enterprise',
    title: 'Sovereign AI: Deploying Private LLMs Within Institutional African Firewalls',
    category: 'Artificial Intelligence',
    readTime: '8 min read',
    date: 'September 2026',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop',
    excerpt:
      'Why legal, financial, and healthcare institutions are transitioning away from commercial public APIs to self-hosted, quantized neural models running on local enterprise infrastructure.',
  },
  {
    slug: 'cloud-migration-economics-ghana',
    title: 'Cloud Migration Economics: Eliminating Hidden Egress and Idle Instance Costs',
    category: 'Cloud & Infrastructure',
    readTime: '5 min read',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
    excerpt:
      'A practical framework for CTOs evaluating multi-cloud vs hybrid on-premise architectures under foreign currency fluctuations and bandwidth constraints.',
  },
  {
    slug: 'modernizing-legacy-erp-systems',
    title: 'Strangler Fig Pattern: Replacing Legacy Commercial Software Without Downtime',
    category: 'Digital Transformation',
    readTime: '7 min read',
    date: 'July 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    excerpt:
      'Step-by-step strategies for incrementally decommissioning monolithic mainframe and legacy databases while keeping operational teams productive.',
  },
];

export default function InsightsPage() {
  return (
    <div className="flex flex-col w-full bg-white text-slate-800">
      {/* ── HEADER ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Insights &amp; <span className="text-tech-accent">Technical Perspectives</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We build innovative solutions through research for Africa and the world. Explore actionable engineering blueprints, architecture case analyses, and digital strategy for modern African leaders.
            </p>
          </div>
        </div>
      </section>

      {/* ── ARTICLES GRID ── */}
      <section className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {articles.map((item) => (
              <article
                key={item.slug}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-tech-accent/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-tech-accent font-bold border border-blue-200/60">
                        {item.category}
                      </span>
                      <span>&middot;</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        <span>{item.date}</span>
                      </span>
                      <span>&middot;</span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} />
                        <span>{item.readTime}</span>
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-3 group-hover:text-tech-accent transition-colors">
                      {item.title}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    Techverge Engineering Lead
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-tech-accent group-hover:text-tech-accentHover transition-colors"
                  >
                    <span>Discuss Implementation</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL ADVISORY CALLOUT ── */}
      <section className="py-24 bg-white text-center border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-tech-accent block mb-3">
            Technical Advisory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Have a custom architecture question?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Our senior software and cloud engineering team regularly consults on technical feasibility, legacy modernization, and AI integration for African enterprises.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-tech-accent text-white font-bold text-sm hover:bg-tech-accentHover transition-colors shadow-sm"
          >
            <span>Book a Technical Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
