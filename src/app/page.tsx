import Link from 'next/link';
import Image from 'next/image';
import {
  Code,
  Cloud,
  Cpu,
  TrendingUp,
  ShieldCheck,
  Layers,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

export const metadata = {
  title: 'Techverge Africa Ltd | Engineering the Future of African Enterprise',
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
 * Core 4 Services Preview
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
];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-white text-slate-800 font-sans selection:bg-tech-accent selection:text-white">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION                                                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200">
        {/* Subtle grid pattern background */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero Left Copy */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Exact Spec Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Engineering the Future of{' '}
                <span className="text-tech-accent">African Enterprise.</span>
              </h1>

              {/* Spec Subheadline with Research Core Statement */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
                We build innovative solutions through research for Africa and the world. <strong className="text-slate-900 font-semibold">Techverge Africa Ltd</strong> delivers production-grade software development, secure cloud infrastructure, and custom AI integrations built to scale your business across the continent.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-tech-accent text-white font-bold text-sm sm:text-base hover:bg-tech-accentHover transition-colors shadow-sm active:scale-95"
                >
                  <span>Partner With Us</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 transition-colors shadow-xs"
                >
                  <span>Explore Our Services</span>
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              {/* Proof badges strip */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-xs font-mono">
                <div>
                  <span className="text-tech-accent font-extrabold text-lg block leading-none mb-1">
                    99.9%
                  </span>
                  <span className="text-slate-500 font-medium">Uptime Architecture</span>
                </div>
                <div>
                  <span className="text-tech-accent font-extrabold text-lg block leading-none mb-1">
                    &lt; 24h
                  </span>
                  <span className="text-slate-500 font-medium">Consultation Response</span>
                </div>
                <div>
                  <span className="text-tech-accent font-extrabold text-lg block leading-none mb-1">
                    Kumasi
                  </span>
                  <span className="text-slate-500 font-medium">Ashanti HQ</span>
                </div>
              </div>
            </div>

            {/* Hero Right: African Enterprise Leadership Image */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="relative h-[360px] sm:h-[440px] lg:h-[480px] w-full rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-100">
                  <Image
                    src="/images/hero-african-executives.jpg"
                    alt="African enterprise executives and senior software engineers collaborating in a modern corporate technology office"
                    fill
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
      <section className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-tech-accent block mb-3">
              Value Proposition
            </span>
            {/* Exact Spec Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Enterprise-Grade Solutions. Local Expertise.
            </h2>
            {/* Exact Spec Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              In a rapidly evolving digital landscape, off-the-shelf software isn&apos;t enough. Techverge Africa Ltd bridges the gap between complex global technology and regional business realities. We design agile, secure, and highly scalable digital ecosystems that turn operational challenges into competitive advantages.
            </p>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-tech-accent/40 transition-all duration-200 group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-tech-accent group-hover:scale-105 transition-transform">
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-tech-accent block">
                      {pillar.highlight}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-500">
                    <CheckCircle2 size={14} className="text-tech-accent" />
                    <span>Production-proven standard</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. CAPABILITIES / CORE 4 PREVIEW                                   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-tech-accent block mb-3">
                Full-Stack Offerings
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Our Technical Capabilities
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-tech-accent hover:text-tech-accentHover transition-colors"
            >
              <span>Explore all technical capabilities</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {previewServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="p-8 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-tech-accent/40 hover:bg-white shadow-2xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-tech-accent">
                        <Icon size={22} />
                      </div>
                      <span className="text-xs font-mono text-slate-400 font-bold">
                        {svc.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-tech-accent transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/70">
                    <Link
                      href={svc.link}
                      className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-tech-accent transition-colors"
                    >
                      <span>Read capability breakdown</span>
                      <ArrowRight size={14} />
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
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-tech-accent block mb-2">
                Engineering Foundations
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Built with Battle-Tested Technologies
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              We leverage production-grade open-source ecosystems and enterprise clouds tailored for high concurrency, zero memory leaks, and seamless multi-region deployment.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-1 shadow-2xs hover:border-tech-accent/40 transition-colors">
              <span className="text-slate-900 font-bold block">Next.js 15 / React</span>
              <span className="text-[10px] text-slate-400">High-Performance Web</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-1 shadow-2xs hover:border-tech-accent/40 transition-colors">
              <span className="text-slate-900 font-bold block">TypeScript / Node</span>
              <span className="text-[10px] text-slate-400">Type-Safe Backend</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-1 shadow-2xs hover:border-tech-accent/40 transition-colors">
              <span className="text-slate-900 font-bold block">Python / FastAPI</span>
              <span className="text-[10px] text-slate-400">AI &amp; Data Microservices</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-1 shadow-2xs hover:border-tech-accent/40 transition-colors">
              <span className="text-slate-900 font-bold block">PostgreSQL &amp; Redis</span>
              <span className="text-[10px] text-slate-400">ACID &amp; Memory Tier</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-1 shadow-2xs hover:border-tech-accent/40 transition-colors">
              <span className="text-slate-900 font-bold block">Kubernetes &amp; Docker</span>
              <span className="text-[10px] text-slate-400">Cloud Orchestration</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-1 shadow-2xs hover:border-tech-accent/40 transition-colors">
              <span className="text-slate-900 font-bold block">AWS &amp; GCP</span>
              <span className="text-[10px] text-slate-400">Multi-Cloud Fabric</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. EXECUTIVE CREDIBILITY / KUMASI REGIONAL ORIGIN                  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-[radial-gradient(ellipse_at_top_right,#1D64EC35,transparent_70%)] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-tech-accent block">
                  Direct Local Accountability
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Driving Digital Evolution from the Heart of Ashanti.
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Headquartered in Kumasi, Techverge Africa Ltd combines deep regional insights with global technology standards. We partner with forward-thinking enterprises, growing startups, and public bodies ready to build production-grade technology that lasts.
                </p>
                
                <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300">
                  <span className="bg-slate-800/90 px-3.5 py-2 rounded-xl border border-slate-700">
                    Techverge Africa Ltd &middot; Registered in Ghana
                  </span>
                  <span className="bg-slate-800/90 px-3.5 py-2 rounded-xl border border-slate-700">
                    Headquarters: Kumasi, Ghana
                  </span>
                  <span className="bg-slate-800/90 px-3.5 py-2 rounded-xl border border-slate-700 text-tech-accent font-bold">
                    Production-Grade Engineering
                  </span>
                </div>
              </div>

              {/* Bespoke Enterprise Architecture Visual */}
              <div className="lg:col-span-5">
                <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-slate-700 shadow-xl bg-slate-950">
                  <Image
                    src="/images/hero-enterprise.jpg"
                    alt="Techverge Africa enterprise cloud architecture visualization"
                    fill
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
      <section className="py-24 md:py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Let&apos;s Build Something Massive Together.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Tell us about your project requirements, technical challenges, or scaling goals. Our engineering team in Kumasi will review your brief and get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-tech-accent text-white font-bold text-sm sm:text-base hover:bg-tech-accentHover transition-colors shadow-sm"
            >
              <span>Partner With Us</span>
              <ArrowRight size={17} />
            </Link>
            <a
              href="https://wa.me/233591507448"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 transition-colors"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
