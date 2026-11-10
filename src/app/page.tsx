import Link from 'next/link';
import Image from 'next/image';
import {
  Code,
  Cloud,
  Cpu,
  TrendingUp,
  FlaskConical,
  Boxes,
  ShieldCheck,
  Layers,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { BrandBar, BrandStripes, tone } from '@/components/Brand';

export const metadata = {
  title: { absolute: 'Techverge Africa Ltd | Engineering the Future of African Enterprise' },
  description:
    'Techverge Africa Ltd builds innovative solutions through research for Africa and the world, delivering production-grade software, secure cloud infrastructure, and custom AI integrations.',
};

/**
 * Core Pillars from spec:
 * - Scalable Architecture: Code and infrastructure built to handle millions of transactions and users.
 * - Data Sovereignty & Security: Compliance-first deployments tailored to African regulatory standards.
 * - Future-Proof Engineering: Infusing artificial intelligence and advanced cloud computing into your daily workflows.
 */
const corePillars = [
  {
    icon: Layers,
    title: 'Scalable Architecture',
    desc: 'Code and infrastructure built to handle millions of transactions and users.',
    highlight: 'Zero Bottlenecks',
  },
  {
    icon: ShieldCheck,
    title: 'Data Sovereignty & Security',
    desc: 'Compliance-first deployments tailored to African regulatory standards.',
    highlight: 'Bank-Grade Defense',
  },
  {
    icon: Cpu,
    title: 'Future-Proof Engineering',
    desc: 'Infusing artificial intelligence and advanced cloud computing into your daily workflows.',
    highlight: 'AI & Cloud Native',
  },
];

/**
 * Core Services Preview
 */
const previewServices = [
  {
    number: '01',
    id: 'software-dev',
    title: 'Software Development & Engineering',
    desc: 'Custom enterprise web platforms, mobile applications (iOS/Android), and robust API backend architectures.',
    link: '/services#software-development',
    icon: Code,
  },
  {
    number: '02',
    id: 'cloud-infra',
    title: 'Cloud Computing & Infrastructure',
    desc: 'DevOps pipelines, high-availability hybrid clouds, serverless architectures, and multi-cloud cost reduction.',
    link: '/services#cloud-infrastructure',
    icon: Cloud,
  },
  {
    number: '03',
    id: 'ai-solutions',
    title: 'Artificial Intelligence & Data Solutions',
    desc: 'Predictive analytics engines, automated process extraction, and private sovereign language model deployments.',
    link: '/services#artificial-intelligence',
    icon: Cpu,
  },
  {
    number: '04',
    id: 'it-consulting',
    title: 'Strategic IT Consultancy',
    desc: 'Tech stack audits, digital transformation roadmaps, cybersecurity reviews, and enterprise systems design.',
    link: '/services#it-consultancy',
    icon: TrendingUp,
  },
  {
    number: '05',
    id: 'research-dev',
    title: 'Research & Development',
    desc: 'Applied technology research, rapid prototypes, feasibility studies, and innovation partnerships built for African contexts.',
    link: '/services#research-development',
    icon: FlaskConical,
  },
  {
    number: '06',
    id: 'software-solutions',
    title: 'Software Solutions',
    desc: 'Ready-to-deploy business systems and SaaS platforms, configured, integrated, and supported by a local team.',
    link: '/services#software-solutions',
    icon: Boxes,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-surface-1 text-ink font-sans selection:bg-action-primary selection:text-white">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION                                                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-surface-1 border-b border-line">

        <div className="relative container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero Left Copy */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Exact Spec Headline */}
              <span className="accent-line" aria-hidden="true" />
              <h1 className="text-display">
                Engineering the Future of{' '}
                <span className="text-action-primary">African Enterprise.</span>
              </h1>

              {/* Spec Subheadline with Research Core Statement */}
              <p className="text-lg sm:text-xl text-ink-muted leading-relaxed font-normal max-w-2xl">
                We build innovative solutions through research for Africa and the world. <strong className="text-ink font-semibold">Techverge Africa Ltd</strong> delivers production-grade software development, secure cloud infrastructure, and custom AI integrations built to scale your business across the continent.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-button bg-action-primary text-white font-bold text-sm sm:text-base hover:bg-action-hover transition-colors active:scale-95"
                >
                  <span>Partner With Us</span>
                  <ArrowRight strokeWidth={1.75} size={18} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-button bg-surface-1 hover:bg-surface-2 text-ink font-bold text-sm sm:text-base border border-line transition-colors"
                >
                  <span>Explore Our Services</span>
                  <ArrowUpRight strokeWidth={1.75} size={18} />
                </Link>
              </div>

              {/* Proof badges strip */}
              <div className="pt-6 border-t border-line grid grid-cols-3 gap-4 text-sm">
                <div className="border-l-4 border-brand-blue pl-3">
                  <span className="font-heading text-ink font-semibold text-xl sm:text-2xl block leading-none mb-2">
                    99.9%
                  </span>
                  <span className="text-ink-muted font-medium">Uptime Architecture</span>
                </div>
                <div className="border-l-4 border-brand-green pl-3">
                  <span className="font-heading text-ink font-semibold text-xl sm:text-2xl block leading-none mb-2">
                    &lt; 24h
                  </span>
                  <span className="text-ink-muted font-medium">Consultation Response</span>
                </div>
                <div className="border-l-4 border-brand-orange pl-3">
                  <span className="font-heading text-ink font-semibold text-xl sm:text-2xl block leading-none mb-2">
                    Kumasi
                  </span>
                  <span className="text-ink-muted font-medium">Ashanti HQ</span>
                </div>
              </div>
            </div>

            {/* Hero Right: African Enterprise Leadership Image */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* The slant: Verge Blue, Spark Orange and Growth Green bands leaning ~30°, as on the brand cover */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-y-8 -right-16 -left-4 sm:-inset-y-12 sm:-right-40 bg-brand-blue"
                  style={{ clipPath: 'polygon(52% 0, 100% 0, 100% 100%, 14% 100%)' }}
                />
                <div
                  aria-hidden="true"
                  className="absolute -inset-y-8 -right-16 -left-4 sm:-inset-y-12 sm:-right-40 bg-brand-orange"
                  style={{ clipPath: 'polygon(45% 0, 49% 0, 11% 100%, 7% 100%)' }}
                />
                <div
                  aria-hidden="true"
                  className="absolute -inset-y-8 -right-16 -left-4 sm:-inset-y-12 sm:-right-40 bg-brand-green"
                  style={{ clipPath: 'polygon(36% 0, 42% 0, 4% 100%, -2% 100%)' }}
                />
                <div className="relative h-[360px] sm:h-[440px] lg:h-[480px] w-full rounded-hero overflow-hidden bg-surface-2 shadow-soft">
                  <Image
                    src="/images/hero-african-executives.webp"
                    alt="African enterprise executives and senior software engineers collaborating in a modern corporate technology office"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. VALUE PROPOSITION / "WHY TECHVERGE?" SECTION                    */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface-0 border-b border-line">
        <div className="container-site">
          
          <div data-reveal className="max-w-3xl mb-16">
            <span className="eyebrow mb-3">
              Value Proposition
            </span>
            {/* Exact Spec Heading */}
            <h2 className="text-h2 mb-6">
              Enterprise-Grade Solutions. Local Expertise.
            </h2>
            {/* Exact Spec Paragraph */}
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              In a rapidly evolving digital landscape, off-the-shelf software isn&apos;t enough. Techverge Africa Ltd bridges the gap between complex global technology and regional business realities. We design agile, secure, and highly scalable digital ecosystems that turn operational challenges into competitive advantages.
            </p>
          </div>

          {/* 3 Core Pillars */}
          <div data-reveal-group className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`bg-surface-1 border border-line ${tone(i).top} rounded-card p-8 flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-soft motion-reduce:hover:translate-y-0 transition-[transform,box-shadow,background-color] ease-out duration-200 group`}
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-button ${tone(i).tile} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <Icon strokeWidth={1.75} size={24} />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-[0.08em] ${tone(i).text} block`}>
                      {pillar.highlight}
                    </span>
                    <h3 className="text-h3">
                      {pillar.title}
                    </h3>
                    <p className="text-base text-ink-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-line flex items-center gap-2 text-sm text-ink-muted">
                    <CheckCircle2 strokeWidth={1.75} size={14} className="text-brand-green-deep" />
                    <span>Production-proven standard</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. CAPABILITIES / CORE PREVIEW                                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface-1 border-b border-line">
        <div className="container-site">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div>
              <span className="eyebrow mb-3">
                Full-Stack Offerings
              </span>
              <h2 className="text-h2">
                Our Technical Capabilities
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-action-primary hover:text-action-hover transition-colors"
            >
              <span>Explore all technical capabilities</span>
              <ArrowRight strokeWidth={1.75} size={16} />
            </Link>
          </div>

          <div data-reveal-group className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className={`p-8 rounded-card bg-surface-0 border border-line ${tone(i).top} hover:bg-surface-1 hover:-translate-y-0.5 hover:shadow-soft motion-reduce:hover:translate-y-0 transition-[transform,box-shadow,background-color] ease-out duration-200 flex flex-col justify-between group`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 rounded-button ${tone(i).tile} flex items-center justify-center`}>
                        <Icon strokeWidth={1.75} size={22} />
                      </div>
                      <span className={`font-heading text-lg font-bold ${tone(i).text}`}>
                        {svc.number}
                      </span>
                    </div>

                    <h3 className="text-h3 group-hover:text-action-primary transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-base text-ink-muted leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-line">
                    <Link
                      href={svc.link}
                      className="inline-flex items-center gap-2 text-sm font-bold text-ink group-hover:text-action-primary transition-colors"
                    >
                      <span>Read capability breakdown</span>
                      <ArrowRight strokeWidth={1.75} size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3.5 BATTLE-TESTED ENTERPRISE TECH STACK                             */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-surface-0 border-b border-line">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <span className="eyebrow mb-2">
                Engineering Foundations
              </span>
              <h3 className="text-h2">
                Built with Battle-Tested Technologies
              </h3>
            </div>
            <p className="text-sm sm:text-base text-ink-muted max-w-md">
              We leverage production-grade open-source ecosystems and enterprise clouds tailored for high concurrency, zero memory leaks, and seamless multi-region deployment.
            </p>
          </div>

          <div data-reveal-group className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 text-sm">
            <div className="p-4 rounded-card bg-surface-1 border border-line text-center space-y-1 hover:border-action-primary/40 transition-colors">
              <span className="text-ink font-bold block">Next.js 15 / React</span>
              <span className="text-xs text-ink-muted">High-Performance Web</span>
            </div>
            <div className="p-4 rounded-card bg-surface-1 border border-line text-center space-y-1 hover:border-action-primary/40 transition-colors">
              <span className="text-ink font-bold block">TypeScript / Node</span>
              <span className="text-xs text-ink-muted">Type-Safe Backend</span>
            </div>
            <div className="p-4 rounded-card bg-surface-1 border border-line text-center space-y-1 hover:border-action-primary/40 transition-colors">
              <span className="text-ink font-bold block">Python / FastAPI</span>
              <span className="text-xs text-ink-muted">AI &amp; Data Microservices</span>
            </div>
            <div className="p-4 rounded-card bg-surface-1 border border-line text-center space-y-1 hover:border-action-primary/40 transition-colors">
              <span className="text-ink font-bold block">PostgreSQL &amp; Redis</span>
              <span className="text-xs text-ink-muted">ACID &amp; Memory Tier</span>
            </div>
            <div className="p-4 rounded-card bg-surface-1 border border-line text-center space-y-1 hover:border-action-primary/40 transition-colors">
              <span className="text-ink font-bold block">Kubernetes &amp; Docker</span>
              <span className="text-xs text-ink-muted">Cloud Orchestration</span>
            </div>
            <div className="p-4 rounded-card bg-surface-1 border border-line text-center space-y-1 hover:border-action-primary/40 transition-colors">
              <span className="text-ink font-bold block">AWS &amp; GCP</span>
              <span className="text-xs text-ink-muted">Multi-Cloud Fabric</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. EXECUTIVE CREDIBILITY / KUMASI REGIONAL ORIGIN                  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface-0 border-b border-line">
        <div className="container-site">
          <div data-reveal className="bg-brand-navy rounded-hero p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden">
            <BrandStripes className="absolute -top-10 -right-32 h-[360px] w-[520px] hidden md:block" opacity={0.3} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
              <div className="lg:col-span-7 space-y-6">
                <span className="eyebrow text-brand-green-bright">
                  Direct Local Accountability
                </span>
                <h2 className="text-h2 text-white">
                  Driving Digital Evolution from the Heart of Ashanti.
                </h2>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                  Headquartered in Kumasi, Techverge Africa Ltd combines deep regional insights with global technology standards. We partner with forward-thinking enterprises, growing startups, and public bodies ready to build production-grade technology that lasts.
                </p>
                
                <div className="pt-2 flex flex-wrap items-center gap-3 text-sm text-white/80">
                  <span className="bg-white/10 px-3.5 py-2 rounded-button border border-white/15">
                    Techverge Africa Ltd &middot; Registered in Ghana
                  </span>
                  <span className="bg-white/10 px-3.5 py-2 rounded-button border border-white/15 text-brand-green-bright font-bold">
                    Production-Grade Engineering
                  </span>
                </div>
              </div>

              {/* Bespoke Enterprise Architecture Visual */}
              <div className="lg:col-span-5">
                <div className="relative h-72 sm:h-80 w-full rounded-card overflow-hidden border border-white/15 bg-brand-midnight">
                  <Image
                    src="/images/hero-enterprise.webp"
                    alt="Techverge Africa enterprise cloud architecture visualization"
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 5. FINAL CALL TO ACTION                                             */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface-1 text-center">
        <div className="container-site">
          <div data-reveal className="relative overflow-hidden rounded-hero border border-brand-blue/15 bg-surface-2 px-6 pt-16 pb-14 sm:px-12 md:pt-20 md:pb-20">
          {/* Brand cover stripes in full colour, running the full height of both edges */}
          <BrandStripes anchor="left" className="absolute inset-y-0 left-0 h-full w-[260px] xl:w-[300px] hidden lg:block" />
          <BrandStripes anchor="right" className="absolute inset-y-0 right-0 h-full w-[260px] xl:w-[300px] hidden lg:block" />
          {/* Soft fades so the stripes melt into the panel instead of ending on a hard edge */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[260px] xl:w-[300px] bg-gradient-to-r from-transparent via-surface-2/10 to-surface-2 hidden lg:block" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[260px] xl:w-[300px] bg-gradient-to-l from-transparent via-surface-2/10 to-surface-2 hidden lg:block" aria-hidden="true" />
          {/* The V's colours along the top edge of the panel, above the fades */}
          <BrandBar className="absolute inset-x-0 top-0 h-1.5" />
          <div className="relative mx-auto max-w-3xl">
          <span className="accent-line mx-auto" aria-hidden="true" />
          <h2 className="text-h2 md:text-fs-h1 mb-6">
            Let&apos;s Build Something <span className="text-action-primary">Massive Together.</span>
          </h2>
          <p className="text-ink-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Tell us about your project requirements, technical challenges, or scaling goals. Our engineering team will review your brief and get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-button bg-action-primary text-white font-bold text-sm sm:text-base hover:bg-action-hover transition-colors"
            >
              <span>Partner With Us</span>
              <ArrowRight strokeWidth={1.75} size={17} />
            </Link>
            <a
              href="https://wa.me/233591507448"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-button bg-surface-1 hover:bg-brand-green/10 text-brand-green-deep font-bold text-sm sm:text-base border border-brand-green/50 hover:border-brand-green transition-colors"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight strokeWidth={1.75} size={17} />
            </a>
          </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
