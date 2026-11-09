import Link from 'next/link';
import { Mail, Phone, Building, ArrowUpRight, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { BrandBar, BrandStripes } from './Brand';

// Footer on Deep Navy (white on Deep Navy is 11.4:1), dressed with the brand cover's
// slanted blue, orange and green stripes. Bright Green is the highlight colour on navy.
const linkCls = 'text-white/85 hover:text-white transition-colors flex items-center justify-between group';
const arrowCls = 'text-white/35 group-hover:text-brand-green-bright group-hover:translate-x-0.5 transition-all';

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-sans text-label font-bold uppercase text-white">
      {children}
      {/* Short Spark Orange line, as on the business card */}
      <span aria-hidden="true" className="mt-2 block h-[3px] w-8 rounded-full bg-brand-orange" />
    </h4>
  );
}

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white/80 font-sans">
      <BrandBar className="h-1.5" />

      {/* Cover motif: slanted stripes in the top-right corner */}
      <BrandStripes
        className="absolute -top-24 -right-40 h-[420px] w-[560px] hidden lg:block"
        opacity={0.4}
      />
      {/* Soft Verge Blue glow from the lower left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand-blue/25 blur-3xl"
      />

      <div className="container-site relative pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-14 border-b border-white/15">

          {/* Column 1: Company Name & Pitch (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center" aria-label="Techverge Africa Ltd">
              <Logo size={30} tone="light" />
            </Link>

            <p className="text-white/80 leading-relaxed max-w-sm">
              <strong className="text-white font-semibold">Techverge Africa Ltd.</strong> We build innovative solutions through research for Africa and the world—engineering next-generation software, cloud, and AI solutions.
            </p>

            {/* Direct Channels */}
            <div className="pt-2 space-y-3 text-sm text-white/85">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-button bg-brand-blue/30 text-white">
                  <Mail size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <a href="mailto:info@techverge.africa" className="hover:text-brand-green-bright transition-colors">
                  info@techverge.africa
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-button bg-brand-green/25 text-brand-green-bright">
                  <Phone size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span>+233 59 150 7448 / +233 24 981 9285</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-5">
            <ColumnHeading>Navigation</ColumnHeading>
            <ul className="space-y-3">
              {[
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About Us' },
                { href: '/insights', label: 'Insights' },
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    <span>{l.label}</span>
                    <ArrowRight size={16} strokeWidth={1.75} className={arrowCls} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Presence & Location (4 cols) */}
          <div className="md:col-span-4 space-y-5">
            <ColumnHeading>
              <span className="inline-flex items-center gap-2">
                <Building size={16} strokeWidth={1.75} className="text-brand-green-bright" aria-hidden="true" />
                <span>Headquarters &amp; Presence</span>
              </span>
            </ColumnHeading>

            <div className="relative overflow-hidden p-6 rounded-card bg-brand-midnight border border-white/15 space-y-3 text-sm leading-relaxed">
              {/* Blue, orange, green edge: the V's three strokes */}
              <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-brand-blue via-brand-orange to-brand-green" />
              <div>
                <span className="text-label font-bold uppercase text-brand-green-bright block">
                  Location
                </span>
                <p className="font-heading text-white font-semibold mt-1">
                  Kumasi, Ghana
                </p>
                <p className="text-white/75 mt-0.5">
                  Ashanti Region &middot; West Africa
                </p>
              </div>

              <div className="pt-3 border-t border-white/15 flex items-center justify-between gap-4">
                <span className="text-label font-bold uppercase text-brand-green-bright">
                  Legal Structure
                </span>
                <span className="text-white/90 font-medium text-right">
                  Registered Private Ltd
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/233591507448"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-button bg-brand-green-bright px-4 py-2.5 text-sm font-bold text-ink hover:bg-white transition-colors"
            >
              <span>Instant WhatsApp Inquiry</span>
              <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>
            &copy; {currentYear} Techverge Africa Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/privacy" className="hover:text-brand-green-bright transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <Link href="/terms" className="hover:text-brand-green-bright transition-colors">
              Terms of Service
            </Link>
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            <Link href="/contact" className="hover:text-brand-green-bright transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
