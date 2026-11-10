import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
} from 'lucide-react';
import { BrandStripes } from '@/components/Brand';

export const metadata: Metadata = {
  title: { absolute: 'Insights & Technical Perspectives | Techverge Africa Ltd' },
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
    image: '/images/insights/mobile-money-payments.webp',
    excerpt:
      'How distributed transactional databases, idempotency protocols, and asynchronous webhook queues maintain 99.99% payment integrity during mobile money network surges.',
  },
  {
    slug: 'sovereign-ai-on-premise-enterprise',
    title: 'Sovereign AI: Deploying Private LLMs Within Institutional African Firewalls',
    category: 'Artificial Intelligence',
    readTime: '8 min read',
    date: 'September 2026',
    image: '/images/insights/private-ai-institutions.webp',
    excerpt:
      'Why legal, financial, and healthcare institutions are transitioning away from commercial public APIs to self-hosted, quantized neural models running on local enterprise infrastructure.',
  },
  {
    slug: 'cloud-migration-economics-ghana',
    title: 'Cloud Migration Economics: Eliminating Hidden Egress and Idle Instance Costs',
    category: 'Cloud & Infrastructure',
    readTime: '5 min read',
    date: 'August 2026',
    image: '/images/insights/cloud-costs.webp',
    excerpt:
      'A practical framework for CTOs evaluating multi-cloud vs hybrid on-premise architectures under foreign currency fluctuations and bandwidth constraints.',
  },
  {
    slug: 'modernizing-legacy-erp-systems',
    title: 'Strangler Fig Pattern: Replacing Legacy Commercial Software Without Downtime',
    category: 'Digital Transformation',
    readTime: '7 min read',
    date: 'July 2026',
    image: '/images/insights/legacy-modernisation.webp',
    excerpt:
      'Step-by-step strategies for incrementally decommissioning monolithic mainframe and legacy databases while keeping operational teams productive.',
  },
];

export default function InsightsPage() {
  return (
    <div className="flex flex-col w-full bg-surface-1 text-ink">
      {/* ── HEADER ── */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-surface-1 border-b border-line">
        {/* Brand cover motif, faint, behind the page title */}
        <BrandStripes className="absolute -top-10 -right-48 h-[calc(100%+80px)] w-[620px] hidden lg:block" opacity={0.12} />
        <div className="relative container-site">
          <div className="max-w-3xl">
            <span className="accent-line" aria-hidden="true" />
            <h1 className="text-h1 mb-4">
              Insights &amp; <span className="text-action-primary">Technical Perspectives</span>
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed font-medium">
              We build innovative solutions through research for Africa and the world. Explore actionable engineering blueprints, architecture case analyses, and digital strategy for modern African leaders.
            </p>
          </div>
        </div>
      </section>

      {/* ── ARTICLES GRID ── */}
      <section className="py-16 md:py-24 bg-surface-0 border-b border-line">
        <div className="container-site">
          <div data-reveal-group className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {articles.map((item) => (
              <article
                key={item.slug}
                className="bg-surface-1 border border-line rounded-card overflow-hidden hover:border-action-primary/40 hover:shadow-soft transition-[border-color,box-shadow] duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-surface-2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out motion-reduce:group-hover:scale-100"
                    />
                    <div className="tv-photo-fade" aria-hidden="true" />
                    {/* Status with a word, never colour alone */}
                    <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-surface-1/95 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-ink shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
                      Coming soon
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-ink-muted mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-2 text-action-primary font-bold border border-line">
                        {item.category}
                      </span>
                      <span>&middot;</span>
                      <span className="flex items-center gap-1">
                        <Calendar strokeWidth={1.75} size={13} />
                        <span>{item.date}</span>
                      </span>
                      <span>&middot;</span>
                      <span className="flex items-center gap-1">
                        <Clock strokeWidth={1.75} size={13} />
                        <span>{item.readTime}</span>
                      </span>
                    </div>

                    <h2 className="text-h3 mb-3 group-hover:text-action-primary transition-colors">
                      {item.title}
                    </h2>

                    <p className="text-base text-ink-muted leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-line flex items-center justify-between">
                  <span className="text-sm text-ink-muted font-semibold">
                    Techverge Engineering Lead
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center py-3 -my-3 gap-1.5 text-sm font-bold text-action-primary group-hover:text-action-hover transition-colors"
                  >
                    <span>Discuss Implementation</span>
                    <ArrowRight strokeWidth={1.75} size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL ADVISORY CALLOUT ── */}
      <section className="py-16 md:py-24 bg-surface-1 text-center border-b border-line">
        <div data-reveal className="container-site max-w-3xl">
          <span className="eyebrow mb-3">
            Technical Advisory
          </span>
          <h2 className="text-h2 mb-4">
            Have a custom architecture question?
          </h2>
          <p className="text-ink-muted text-base leading-relaxed mb-8">
            Our senior software and cloud engineering team regularly consults on technical feasibility, legacy modernization, and AI integration for African enterprises.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-button bg-action-primary text-white font-bold text-sm hover:bg-action-hover transition-colors"
          >
            <span>Book a Technical Consultation</span>
            <ArrowRight strokeWidth={1.75} size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
