'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { BrandBar } from './Brand';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // Close mobile drawer on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    // Header: sticky and white with a thin bottom line
    <header className="sticky top-0 z-50 w-full bg-surface-1 border-b border-line">
      {/* Brand strip: blue, orange and green converging, as in the V mark */}
      <BrandBar className="h-1.5" />
      <div className="container-site relative">
        <div className="flex h-16 md:h-[72px] items-center justify-between">
          {/* Logo lock-up */}
          <Link href="/" className="rounded-button" aria-label="Techverge Africa Ltd - Home">
            <Logo size={28} priority />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`group relative px-3.5 py-2 text-[15px] font-medium rounded-button transition-colors ${
                    active ? 'text-action-primary' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {link.name}
                  {/* Active: Verge Blue underline with an orange tip. Hover: Growth Green. */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-3.5 right-3.5 -bottom-[13px] md:-bottom-[17px] h-[3px] rounded-full transition-all ${
                      active
                        ? 'bg-brand-blue'
                        : 'bg-brand-green scale-x-0 group-hover:scale-x-100 origin-left'
                    }`}
                  />
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute right-3.5 -bottom-[13px] md:-bottom-[17px] h-[3px] w-2 rounded-full bg-brand-orange"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header CTA: blue button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-button bg-action-primary text-white font-semibold text-[15px] hover:bg-action-hover transition-colors"
            >
              <span>Book a Consultation</span>
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden -mr-2 p-2 rounded-button text-ink hover:bg-surface-2 transition-colors"
            aria-label={isMobileOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={24} strokeWidth={1.75} /> : <Menu size={24} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[70px] z-40 bg-surface-1 md:hidden flex flex-col justify-between px-4 pt-4 pb-8 overflow-y-auto border-t border-line">
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center justify-between py-4 border-b border-line font-heading text-xl font-semibold transition-colors ${
                    active ? 'text-action-primary border-l-4 border-l-brand-blue pl-3' : 'text-ink hover:text-brand-green-deep'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight
                    size={20}
                    strokeWidth={1.75}
                    aria-hidden="true"
                    className={active ? 'text-brand-orange' : 'text-ink-muted'}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 space-y-4">
            <Link
              href="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2 min-h-12 py-3 rounded-button bg-action-primary text-white font-semibold text-base hover:bg-action-hover transition-colors"
            >
              <span>Book a Consultation</span>
              <ArrowRight size={18} strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
