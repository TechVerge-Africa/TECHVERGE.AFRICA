import type { Metadata } from 'next';
import Image from 'next/image';
import ContactForm from './ContactForm';
import { Mail, Phone, MapPin, MessageSquare, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Partner With Techverge Africa Ltd',
  description:
    'Let’s build something massive together. Tell us about your project requirements, technical challenges, or scaling goals. Headquartered in Kumasi, Ghana.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-white text-slate-800">
      {/* ── HEADER ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Let&apos;s Build Something <span className="text-tech-accent">Massive Together.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              We build innovative solutions through research for Africa and the world. Tell us about your project requirements, technical challenges, or scaling goals. Our engineering team in Kumasi will review and get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Contact Info & Value Props (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                  Let&apos;s discuss your project
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Whether you need custom software, cloud infrastructure, AI solutions, or strategic consulting, our team in Kumasi is ready to collaborate.
                </p>
              </div>

              {/* Direct Channels Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-tech-accent shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 font-semibold block">
                      Email Inquiries
                    </span>
                    <a
                      href="mailto:info@techverge.africa"
                      className="text-sm font-bold text-slate-900 hover:text-tech-accent transition-colors"
                    >
                      info@techverge.africa
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">24-hour response guarantee</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 font-semibold block">
                      Direct Lines &amp; WhatsApp
                    </span>
                    <div className="text-sm font-bold text-slate-900 space-y-0.5">
                      <p>+233 59 150 7448</p>
                      <p>+233 24 981 9285</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 font-semibold block">
                      Headquarters
                    </span>
                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      Kumasi, Ghana
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">Ashanti Region &middot; West Africa</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Callout */}
              <div className="p-6 rounded-3xl bg-emerald-50/80 border border-emerald-200/80 space-y-3">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <MessageSquare size={16} className="text-emerald-600" />
                  <span>Prefer rapid messaging?</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Start a direct chat with our engineering lead via WhatsApp for quick project scoping and preliminary feasibility questions.
                </p>
                <a
                  href="https://wa.me/233591507448?text=Hello%20Techverge%20Africa!%20I%20would%20like%20to%20discuss%20a%20new%20technology%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <span>Chat on WhatsApp (+233 59 150 7448)</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Legal Credibility Note */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs font-mono text-slate-600 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Corporate Entity:</span>
                  <span className="font-bold text-slate-900">Techverge Africa Ltd</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Jurisdiction:</span>
                  <span className="font-bold text-tech-accent">Republic of Ghana</span>
                </div>
              </div>

              {/* Consultation Office Visual Card */}
              <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                  alt="Techverge Africa engineering consultation center"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-tech-accent font-bold block mb-0.5">
                    Consultation &amp; Scoping Hub
                  </span>
                  <p className="text-xs font-semibold text-white">
                    Kumasi, Ghana &middot; On-Site &amp; Pan-African Remote Deployments
                  </p>
                </div>
              </div>

            </div>

            {/* Right: Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Send Us a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
