import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { tone, BrandStripes } from '@/components/Brand';
import {
  Target,
  Compass,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: { absolute: 'About Us | Techverge Africa Ltd' },
  description:
    'Driving digital evolution from the heart of Ashanti. Learn about Techverge Africa Ltd, our mission, vision, and engineering leadership in Kumasi, Ghana.',
};

const executiveLeadership = [
  {
    name: 'Abdul Latif Sulley',
    role: 'Co-founder & Chief Executive Officer',
    badge: 'CO-FOUNDER & CEO',
    focus: 'Enterprise Systems Architecture & Corporate Strategy',
    image: '/images/team/latif.webp',
    bio: 'Systems engineer and technology entrepreneur. Directs corporate strategy and engineering standards across software, cloud infrastructure, and artificial intelligence initiatives for African enterprise.',
    linkedin: 'https://www.linkedin.com/in/abdul-latif-sulley',
    github: 'https://github.com/asulley',
    isLead: true,
  },
   {
    name: 'Abdul-Moomin Is-haq',
    role: 'Co-founder & Chief Technology Office',
    badge: 'CO-FOUNDER & CTO',
    focus: 'Full-Stack Architecture & Engineering Operations',
    image: '/images/team/ishaq.webp',
    bio: 'Tech entrepreneur, Senior systems architect and co-founder directing engineering delivery, system security, and developer operations. Leads technical design for scalable backend APIs and high-concurrency enterprise applications.',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    isLead: false,
  },
  {
    name: 'Robert Samuel Aggrey',
    role: 'Secretary & Customer Relations',
    badge: 'EXECUTIVE SECRETARY',
    focus: 'Corporate Governance & Institutional Client Success',
    image: '/images/team/robert.webp',
    bio: 'Oversees corporate administration, enterprise client onboarding, and customer relations. Ensures transparent stakeholder communication, regulatory compliance, and seamless operational coordination.',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    isLead: false,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-surface-1 text-ink">
      {/* ── HEADER ── */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-surface-1 border-b border-line">
        {/* Brand cover motif, faint, behind the page title */}
        <BrandStripes className="absolute -top-10 -right-48 h-[calc(100%+80px)] w-[620px] hidden lg:block" opacity={0.12} />
        <div className="relative container-site">
          <div className="max-w-3xl">
            <span className="accent-line" aria-hidden="true" />
            <h1 className="text-h1 mb-6">
              Driving Digital Evolution from the{' '}
              <span className="text-action-primary">Heart of Ashanti.</span>
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed font-medium">
              We build innovative solutions through research for Africa and the world—engineering the technological backbone that allows African enterprises, institutions, and builders to lead on the global stage.
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR STORY & ORIGINS ── */}
      <section className="py-16 md:py-24 bg-surface-0 border-b border-line">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
            
            {/* Story Copy (7 cols) */}
            <div data-reveal className="lg:col-span-7 space-y-6">
              <span className="eyebrow">
                Company Origins
              </span>
              <h2 className="text-h2">
                Our Story
              </h2>
              
              <div className="space-y-4 text-base text-ink-muted leading-relaxed">
                <p>
                  Incorporated in the Republic of Ghana, <strong>Techverge Africa Ltd</strong> was founded with a singular, disruptive vision: to build the foundational software ecosystem that will power Africa&apos;s digital economy. We build innovative solutions through research for Africa and the world.
                </p>
                <p>
                  Headquartered in Kumasi, we combine deep, localized regional insights with global technology standards. We don&apos;t just act as vendors; we step in as dedicated technology partners to forward-thinking enterprises, growing startups, and public institutions looking to make an impact.
                </p>
                <p>
                  By treating software architecture, enterprise cloud, and practical artificial intelligence as interconnected systems, we help organizations break through infrastructural barriers and achieve sustained operational sovereignty.
                </p>
              </div>
            </div>

            {/* Visual Photography Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative h-96 sm:h-[460px] w-full rounded-card overflow-hidden border border-line bg-surface-2">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="Techverge Africa engineering workspace"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>

          {/* ── MISSION & VISION CARDS ── */}
          <div data-reveal-group className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-surface-1 border border-line rounded-card p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-button bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-action-primary">
                  <Target strokeWidth={1.75} size={24} />
                </div>
                <span className="eyebrow">
                  Strategic Mission
                </span>
                <h3 className="text-h3">
                  Our Mission
                </h3>
                <p className="text-base text-ink-muted leading-relaxed font-medium">
                  To accelerate African digital transformation by delivering resilient software products and high-impact IT infrastructure.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-line flex items-center gap-2 text-sm text-ink-muted">
                <CheckCircle2 strokeWidth={1.75} size={14} className="text-action-primary" />
                <span>Execution-driven engineering roadmap</span>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-surface-1 border border-line rounded-card p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-button bg-brand-green/15 border border-brand-green/30 flex items-center justify-center text-brand-green-deep">
                  <Compass strokeWidth={1.75} size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-brand-green-deep block">
                  Continental Ambition
                </span>
                <h3 className="text-h3">
                  Our Vision
                </h3>
                <p className="text-base text-ink-muted leading-relaxed font-medium">
                  To evolve into Africa&apos;s leading tech conglomerate, fostering innovation, engineering breakthrough products, and backing the next generation of tech builders.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-line flex items-center gap-2 text-sm text-ink-muted">
                <CheckCircle2 strokeWidth={1.75} size={14} className="text-brand-green-deep" />
                <span>Building for multi-generational scale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP & TEAM ── */}
      <section className="py-16 md:py-24 bg-surface-1 border-b border-line">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div>
              <span className="eyebrow mb-2">
                Executive Leadership
              </span>
              <h2 className="text-h2">
                The Architects of Techverge Africa
              </h2>
            </div>
          </div>

          <div data-reveal-group className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveLeadership.map((member, i) => (
              <div
                key={member.name}
                className={`font-roboto bg-surface-0 border border-line ${tone(i).top} rounded-card overflow-hidden flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-soft motion-reduce:hover:translate-y-0 transition-[transform,box-shadow,background-color] ease-out duration-200 group`}
              >
                <div>
                  <div className="relative w-full aspect-square overflow-hidden bg-surface-2">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-500 ease-out motion-reduce:group-hover:scale-100"
                    />
                    <div className="tv-photo-fade" aria-hidden="true" />
                    <span className="absolute top-3 left-3 text-xs font-bold uppercase tracking-[0.08em] text-white bg-action-primary px-3 py-1 rounded-full shadow-sm">
                      {member.badge}
                    </span>
                  </div>

                  <div className="p-6 [container-type:inline-size]">
                    <h3 className="font-oswald text-[clamp(1.375rem,8.6cqi,2.25rem)] leading-tight whitespace-nowrap font-semibold mb-1 uppercase tracking-[0.04em] text-center">
                      {member.name}
                    </h3>
                    <p className="font-oswald text-base font-medium tracking-[0.02em] text-action-primary mb-1 text-center">
                      {member.role}
                    </p>
                    <p className="text-xs text-ink-muted mb-3 font-medium text-center">
                      {member.focus}
                    </p>
                    <p className="text-base text-ink-muted leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-line flex items-center gap-3 text-sm">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-ink-muted hover:text-action-primary transition-colors font-medium"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 1 0-.01-2.8 1.4 1.4 0 0 0 .01 2.8m1.4 9.74v-8.37H5.06v8.37z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <span className="text-white/80">&middot;</span>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-ink-muted hover:text-action-primary transition-colors font-medium"
                    aria-label={`${member.name} GitHub Profile`}
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT CTA ── */}
      <section className="py-16 md:py-24 bg-surface-0 text-center">
        <div className="container-site max-w-4xl">
          <h2 className="text-h2 mb-4">
            Partner with an engineering team that understands your reality.
          </h2>
          <p className="text-ink-muted text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s build production-grade technology that scales across African markets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-button bg-action-primary text-white font-bold text-sm hover:bg-action-hover transition-colors"
            >
              <span>Book a Consultation</span>
              <ArrowRight strokeWidth={1.75} size={16} />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-button bg-surface-1 hover:bg-surface-2 text-ink font-bold text-sm border border-line transition-colors"
            >
              <span>Explore Our Services</span>
              <ArrowUpRight strokeWidth={1.75} size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
