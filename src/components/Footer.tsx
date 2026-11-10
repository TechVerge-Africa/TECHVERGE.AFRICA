import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import CurrentYear from './CurrentYear';
import { BrandBar, BrandStripes } from './Brand';

/*
 * Footer on Deep Navy (white on Deep Navy is 11.4:1).
 * Typography follows the brand guide: Sora Semi Bold for headings in sentence case,
 * Roboto for text at body size, contact details as plain text.
 * Colour is used sparingly: the V strip on top, the cover stripes, Bright Green for highlights.
 */

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/insights', label: 'Insights' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

const linkCls =
  'text-white/80 hover:text-white underline-offset-4 decoration-brand-green-bright decoration-2 hover:underline transition-colors';

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-oswald text-lg font-semibold uppercase tracking-[0.04em] text-white">{children}</h2>;
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy font-roboto text-base text-white/80">
      <BrandBar className="h-1.5" />

      {/* Cover motif: slanted stripes in the top-right corner */}
      <BrandStripes
        className="absolute -top-24 -right-40 h-[420px] w-[560px] hidden lg:block"
        opacity={0.28}
      />

      <div className="container-site relative pt-10 pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-16">

          {/* About and contact */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center" aria-label="Techverge Africa Ltd">
              <Logo size={30} tone="light" />
            </Link>

            <p className="mt-6 max-w-[34ch] leading-relaxed">
              <strong className="font-semibold text-white">Techverge Africa Ltd.</strong> We build innovative solutions through research for Africa and the world—engineering next-generation software, cloud, and AI solutions.
            </p>

            <address className="mt-6 space-y-1 not-italic leading-relaxed">
              <p>
                <a href="mailto:info@techverge.africa" className={linkCls}>
                  info@techverge.africa
                </a>
              </p>
              <p className="tabular-nums">+233 59 150 7448 / +233 24 981 9285</p>
            </address>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="md:col-span-3">
            <ColumnHeading>Navigation</ColumnHeading>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Headquarters */}
          <div className="md:col-span-4">
            <ColumnHeading>Headquarters &amp; Presence</ColumnHeading>

            <dl className="mt-4 space-y-4 leading-relaxed">
              <div>
                <dt className="sr-only">Location</dt>
                <dd>
                  <span className="block text-white">Kumasi, Ghana</span>
                  <span className="block">Ashanti Region &middot; West Africa</span>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-white/60">Legal Structure</dt>
                <dd className="text-white">Registered Private Ltd</dd>
              </div>
            </dl>

            <a
              href="https://wa.me/233591507448"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 font-medium text-brand-green-bright underline-offset-4 decoration-2 hover:underline"
            >
              Instant WhatsApp Inquiry
              <ArrowUpRight size={18} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar: white on Verge Blue (brand guide "Aa White on Blue", 6:1). Extra space (bottom on phones, right on wider screens)
          keeps the links clear of the floating chat button. */}
      <div className="relative bg-action-primary">
        <div className="container-site flex flex-col gap-3 pt-6 pb-24 text-sm sm:flex-row sm:items-center sm:justify-between sm:pb-6 sm:pr-44 2xl:pr-6 text-white">
          <p>&copy; <CurrentYear serverYear={new Date().getFullYear()} /> Techverge Africa Ltd. All Rights Reserved.</p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Link href="/privacy" className="underline-offset-4 decoration-2 hover:underline">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-white/60">&middot;</span>
            <Link href="/terms" className="underline-offset-4 decoration-2 hover:underline">
              Terms of Service
            </Link>
            <span aria-hidden="true" className="text-white/60">&middot;</span>
            <Link href="/contact" className="underline-offset-4 decoration-2 hover:underline">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
