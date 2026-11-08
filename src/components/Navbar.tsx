'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-100 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-tech-accent rounded-lg p-0.5"
            aria-label="Techverge Africa Ltd - Home"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Techverge Africa"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-tech-accent transition-colors leading-none">
                Techverge<span className="text-tech-accent font-black">.</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mt-0.5">
                Africa Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    active
                      ? 'text-tech-accent bg-blue-50/70'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Header CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-tech-accent text-white font-bold text-sm hover:bg-tech-accentHover transition-colors shadow-xs active:scale-95"
            >
              <span>Book a Consultation</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-tech-accent"
            aria-label={isMobileOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-white md:hidden flex flex-col justify-between p-6 overflow-y-auto border-t border-slate-200 animate-in fade-in duration-150">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-bold transition-colors ${
                    active
                      ? 'text-tech-accent bg-blue-50/80 border border-blue-100'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight
                    size={16}
                    className={active ? 'text-tech-accent' : 'text-slate-400'}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-slate-100 space-y-4">
            <Link
              href="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-tech-accent text-white font-bold text-base hover:bg-tech-accentHover transition-colors shadow-sm"
            >
              <span>Book a Consultation</span>
              <ArrowRight size={18} />
            </Link>

            <div className="text-center">
              <p className="text-xs text-slate-500 font-mono">
                Techverge Africa Ltd · Kumasi, Ghana
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
