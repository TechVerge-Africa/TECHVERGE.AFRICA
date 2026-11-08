import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Building, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-14 border-b border-slate-800">
          
          {/* Column 1: Company Name & Pitch (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white/10 p-1 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Techverge Africa Ltd"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Techverge<span className="text-tech-accent font-black">.</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              <strong className="text-white font-semibold">Techverge Africa Ltd.</strong> We build innovative solutions through research for Africa and the world—engineering next-generation software, cloud, and AI solutions.
            </p>

            {/* Direct Channels */}
            <div className="pt-2 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-tech-accent shrink-0" />
                <a
                  href="mailto:info@techverge.africa"
                  className="hover:text-white transition-colors"
                >
                  info@techverge.africa
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-tech-accent shrink-0" />
                <span>+233 59 150 7448 / +233 24 981 9285</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Services</span>
                  <span className="text-slate-600 group-hover:text-tech-accent text-xs">➔</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>About Us</span>
                  <span className="text-slate-600 group-hover:text-tech-accent text-xs">➔</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Insights</span>
                  <span className="text-slate-600 group-hover:text-tech-accent text-xs">➔</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Privacy Policy</span>
                  <span className="text-slate-600 group-hover:text-tech-accent text-xs">➔</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Terms of Service</span>
                  <span className="text-slate-600 group-hover:text-tech-accent text-xs">➔</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Presence & Location (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Building size={14} className="text-tech-accent" />
              <span>Headquarters &amp; Presence</span>
            </h4>

            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3 text-xs leading-relaxed">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                  Location
                </span>
                <p className="text-slate-200 font-bold text-sm mt-0.5">
                  Kumasi, Ghana
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Ashanti Region &middot; West Africa
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  Legal Structure
                </span>
                <span className="font-mono text-slate-300 text-xs font-semibold">
                  Registered Private Ltd &middot; Ghana
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/233591507448"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Instant WhatsApp Inquiry</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="font-mono">
            &copy; {currentYear} Techverge Africa Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>&middot;</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <span>&middot;</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
