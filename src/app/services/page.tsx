import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Code,
  Cloud,
  Cpu,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Technical Capabilities | Services | Techverge Africa Ltd',
  description:
    'Fully licensed and structured to deliver end-to-end digital transformation: Software Development, Cloud Computing, AI & Data Solutions, and Strategic IT Consultancy.',
};

const coreServices = [
  {
    number: '01',
    id: 'software-development',
    title: 'Software Development & Engineering',
    category: 'Application Engineering',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    copy: 'We build high-performance web systems, cross-platform mobile apps, and robust backend architectures. From custom enterprise resource planning (ERP) systems to consumer-facing applications, our development engine ensures clean code, seamless APIs, and intuitive user experiences.',
    focusAreas: [
      'Custom Web Apps',
      'Mobile App Development (iOS/Android)',
      'API Integrations',
      'Legacy System Modernization',
    ],
    deliverables: [
      'Full-stack TypeScript / Next.js / Python enterprise architectures',
      'Native & cross-platform React Native / Flutter apps',
      'REST & GraphQL microservice design with 99.9% uptime',
      'Relational & distributed database modeling (PostgreSQL, Redis)',
    ],
  },
  {
    number: '02',
    id: 'cloud-infrastructure',
    title: 'Cloud Computing & Infrastructure Management',
    category: 'Cloud & DevOps',
    icon: Cloud,
    image: '/images/cloud-network.jpg',
    copy: 'Transition away from fragile on-premise hardware. We design, deploy, and manage highly secure cloud environments leveraging global infrastructure tailored to maximize uptime, speed, and cost efficiency.',
    focusAreas: [
      'Cloud Migration',
      'DevOps Pipelines',
      'Hybrid Cloud Architecture',
      'Serverless Infrastructure',
    ],
    deliverables: [
      'Automated CI/CD pipelines with zero-downtime deployment strategies',
      'AWS, Google Cloud & Azure multi-cloud cost optimization audits',
      'Kubernetes orchestration & containerized microservices',
      'Disaster recovery, automated daily backups & high-availability failover',
    ],
  },
  {
    number: '03',
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence & Data Solutions',
    category: 'AI & Data Science',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop',
    copy: 'Transform your raw operational data into a powerful decision-making engine. We engineer custom AI models, predictive analytics frameworks, and smart automation systems designed to optimize resource allocation and enhance business intelligence.',
    focusAreas: [
      'Machine Learning Models',
      'Process Automation',
      'Conversational AI/Chatbots',
      'Advanced Data Analytics',
    ],
    deliverables: [
      'Custom OCR & intelligent document processing for paper-heavy workflows',
      'Predictive inventory, credit scoring & demand forecasting algorithms',
      'Private, on-premise or cloud-hosted large language model (LLM) agents',
      'Real-time executive BI dashboards and automated telemetry pipelines',
    ],
  },
  {
    number: '04',
    id: 'it-consultancy',
    title: 'Strategic IT Consultancy & Digital Transformation',
    category: 'Strategy & Advisory',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    copy: 'Technology is a liability without strategy. We partner closely with executive teams to audit existing tech stacks, craft technological roadmaps, and oversee digital overhauls that directly accelerate business revenue.',
    focusAreas: [
      'Technology Audits',
      'IT Roadmapping',
      'Systems Architecture Design',
      'Cybersecurity Assessments',
    ],
    deliverables: [
      'End-to-end IT architecture and technical debt assessment',
      'Bank-grade cybersecurity auditing & data compliance reviews',
      'Vendor evaluation, software procurement & team capability roadmaps',
      'Change management support and executive digital advisory',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-white text-slate-800">
      {/* ── HEADER ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Our Technical <span className="text-tech-accent">Capabilities</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
              Fully licensed and structured to deliver end-to-end digital transformation. We build innovative solutions through research for Africa and the world.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE CORE 4 SERVICE CARDS ── */}
      <section className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  
                  {/* Visual Image Column */}
                  <div
                    className={`relative min-h-[260px] sm:min-h-[320px] lg:min-h-full lg:col-span-5 bg-slate-100 ${
                      isEven ? 'lg:order-2' : ''
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content Column */}
                  <div
                    className={`p-8 sm:p-10 lg:p-12 lg:col-span-7 flex flex-col justify-between ${
                      isEven ? 'lg:order-1' : ''
                    }`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-tech-accent shrink-0">
                          <Icon size={24} />
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-tech-accent block">
                            {service.category}
                          </span>
                          <span className="text-xs font-mono text-slate-400">
                            Core Discipline {service.number} / 04
                          </span>
                        </div>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        {service.title}
                      </h2>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {service.copy}
                      </p>

                      {/* Key Focus Areas (From Spec) */}
                      <div>
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 mb-3">
                          Key Focus Areas:
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.focusAreas.map((focus) => (
                            <div
                              key={focus}
                              className="p-3 rounded-xl bg-slate-50 border border-slate-200/90 text-xs font-semibold text-slate-800 flex items-center gap-2.5"
                            >
                              <CheckCircle2 size={15} className="text-tech-accent shrink-0" />
                              <span>{focus}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables Bullet List */}
                      <div>
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                          What We Deliver:
                        </h3>
                        <ul className="space-y-2 text-xs text-slate-600">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-tech-accent mt-1.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-8 mt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-xs font-mono text-slate-500">
                        Production-grade delivery with SLA guarantees
                      </span>
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-tech-accent text-white font-bold text-xs hover:bg-tech-accentHover transition-colors shadow-xs"
                      >
                        <span>Request Architecture Scope</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── FINAL SERVICES CTA ── */}
      <section className="py-24 md:py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Ready to modernize your infrastructure?
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Schedule a technical discovery session with our engineering leads in Kumasi to discuss your roadmap, timeline, and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-tech-accent text-white font-bold text-sm hover:bg-tech-accentHover transition-colors shadow-sm"
            >
              <span>Book a Consultation</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/233591507448?text=Hello%20Techverge%20Africa!%20I%20would%20like%20to%20consult%20on%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 transition-colors"
            >
              <span>WhatsApp Direct Line</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
