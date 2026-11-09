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
    <div className="flex flex-col w-full bg-surface-1 text-ink">
      {/* ── HEADER ── */}
      <section className="py-16 md:py-20 bg-surface-1 border-b border-line">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="accent-line" aria-hidden="true" />
            <h1 className="text-h1 mb-6">
              Let&apos;s Build Something <span className="text-action-primary">Massive Together.</span>
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed">
              We build innovative solutions through research for Africa and the world. Tell us about your project requirements, technical challenges, or scaling goals. Our engineering team will review and get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16 md:py-24 bg-surface-0 border-b border-line">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Contact Info & Value Props (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-h2 mb-4">
                  Let&apos;s discuss your project
                </h2>
                <p className="text-sm text-ink-muted leading-relaxed">
                  Whether you need custom software, cloud infrastructure, AI solutions, or strategic consulting, our team is ready to collaborate.
                </p>
              </div>

              {/* Direct Channels Card */}
              <div className="p-6 rounded-card bg-surface-1 border border-line space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-button bg-brand-blue/10 border border-brand-blue/20 text-action-primary flex items-center justify-center shrink-0">
                    <Mail strokeWidth={1.75} size={18} />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-ink-muted font-semibold block">
                      Email Inquiries
                    </span>
                    <a
                      href="mailto:info@techverge.africa"
                      className="text-sm font-bold text-ink hover:text-action-primary transition-colors"
                    >
                      info@techverge.africa
                    </a>
                    <p className="text-xs text-ink-muted mt-0.5">24-hour response guarantee</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-line">
                  <div className="w-10 h-10 rounded-button bg-brand-green/15 border border-brand-green/30 text-brand-green-deep flex items-center justify-center shrink-0">
                    <Phone strokeWidth={1.75} size={18} />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-ink-muted font-semibold block">
                      Direct Lines &amp; WhatsApp
                    </span>
                    <div className="text-sm font-bold text-ink space-y-0.5">
                      <p>+233 59 150 7448</p>
                      <p>+233 24 981 9285</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-line">
                  <div className="w-10 h-10 rounded-button bg-brand-orange/15 border border-brand-orange/30 text-brand-orange-deep flex items-center justify-center shrink-0">
                    <MapPin strokeWidth={1.75} size={18} />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-ink-muted font-semibold block">
                      Headquarters
                    </span>
                    <p className="text-sm font-bold text-ink leading-snug">
                      Kumasi, Ghana
                    </p>
                    <p className="text-xs text-ink-muted mt-0.5">Ashanti Region &middot; West Africa</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Callout */}
              <div className="p-6 rounded-card bg-brand-green/10 border border-brand-green/30 space-y-3">
                <div className="flex items-center gap-2 text-brand-green-deep font-bold text-sm">
                  <MessageSquare strokeWidth={1.75} size={16} className="text-brand-green-deep" />
                  <span>Prefer rapid messaging?</span>
                </div>
                <p className="text-xs text-ink leading-relaxed">
                  Start a direct chat with our engineering lead via WhatsApp for quick project scoping and preliminary feasibility questions.
                </p>
                <a
                  href="https://wa.me/233591507448?text=Hello%20Techverge%20Africa!%20I%20would%20like%20to%20discuss%20a%20new%20technology%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-button bg-action-primary hover:bg-action-hover text-white font-bold text-xs transition-colors"
                >
                  <span>Chat on WhatsApp (+233 59 150 7448)</span>
                  <ArrowUpRight strokeWidth={1.75} size={14} />
                </a>
              </div>

              {/* Legal Credibility Note */}
              <div className="p-4 rounded-card bg-surface-1 border border-line text-xs text-ink-muted space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-ink-muted">Corporate Entity:</span>
                  <span className="font-bold text-ink">Techverge Africa Ltd</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-muted">Jurisdiction:</span>
                  <span className="font-bold text-action-primary">Republic of Ghana</span>
                </div>
              </div>

              {/* Consultation Office Visual Card */}
              <div className="relative h-44 w-full rounded-card overflow-hidden border border-line bg-surface-2">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                  alt="Techverge Africa engineering consultation center"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/90 via-brand-midnight/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase tracking-[0.08em] text-brand-green-bright font-bold block mb-0.5">
                    Consultation &amp; Scoping Hub
                  </span>
                  <p className="text-xs font-semibold text-white">
                    On-Site &amp; Pan-African Remote Deployments
                  </p>
                </div>
              </div>

            </div>

            {/* Right: Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-surface-1 border border-line rounded-card p-6 sm:p-10">
              <div className="mb-8">
                <h3 className="text-h3">
                  Send Us a Message
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted mt-1 leading-relaxed">
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
