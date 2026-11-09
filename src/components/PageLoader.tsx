'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/** Shortest time the loader stays up, so it reads as a deliberate transition, not a flicker. */
const MIN_SPLASH_MS = 900; // first open of the site
const MIN_ROUTE_MS = 450; // moving between pages
const MAX_WAIT_MS = 8000; // never block the page longer than this

/**
 * Branded loading screen: the V mark inside spinning arcs in Verge Blue and Growth Green
 * with a Spark Orange tip. Shown when the site first opens and while routing between pages.
 */
export default function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true); // rendered visible on the server: the opening splash
  const navStartedAt = useRef<number | null>(null);
  const lastPath = useRef(pathname);

  // Opening splash: hide once the page has fully loaded (and the minimum time has passed).
  useEffect(() => {
    const mountedAt = performance.now();
    let timer: ReturnType<typeof setTimeout>;
    const hide = () => {
      const wait = Math.max(0, MIN_SPLASH_MS - (performance.now() - mountedAt));
      timer = setTimeout(() => setVisible(false), wait);
    };
    if (document.readyState === 'complete') hide();
    else window.addEventListener('load', hide, { once: true });
    const cap = setTimeout(() => setVisible(false), MAX_WAIT_MS);
    return () => {
      window.removeEventListener('load', hide);
      clearTimeout(timer);
      clearTimeout(cap);
    };
  }, []);

  // Routing: show on internal link clicks to a different page.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.('a');
      if (!a || !a.href || a.target === '_blank' || a.hasAttribute('download')) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // same page or #hash jump
      navStartedAt.current = performance.now();
      setVisible(true);
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  // Routing finished: the new page is on screen.
  useEffect(() => {
    if (pathname === lastPath.current) return;
    lastPath.current = pathname;
    const started = navStartedAt.current;
    navStartedAt.current = null;
    if (started === null) return; // e.g. browser back/forward: no overlay was shown
    const wait = Math.max(0, MIN_ROUTE_MS - (performance.now() - started));
    const t = setTimeout(() => setVisible(false), wait);
    return () => clearTimeout(t);
  }, [pathname]);

  // Safety net for routing: never leave the overlay up.
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setVisible(false), MAX_WAIT_MS);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <>
      {/* Without JavaScript the overlay could never be dismissed, so don't show it at all. */}
      <noscript>
        <style>{'.tv-loader{display:none!important}'}</style>
      </noscript>
      <div
        className={`tv-loader fixed inset-0 z-[100] flex items-center justify-center bg-surface-0 transition-opacity duration-500 ${
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        role="status"
        aria-live="polite"
        aria-hidden={!visible}
      >
        <span className="sr-only">{visible ? 'Loading Techverge Africa' : ''}</span>

        <div className="relative h-44 w-44">
          {/* Spinning arcs: the V's three colours */}
          <svg viewBox="0 0 176 176" className="tv-loader-spin absolute inset-0 h-full w-full" aria-hidden="true">
            <circle cx="88" cy="88" r="80" fill="none" stroke="#2D66F5" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="130 373" />
            <circle cx="88" cy="88" r="80" fill="none" stroke="#EC782E" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="16 487" strokeDashoffset="-142" />
            <circle cx="88" cy="88" r="80" fill="none" stroke="#5BAA42" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="130 373" strokeDashoffset="-252" />
          </svg>

          {/* The logo, unchanged, with the lock-up text */}
          <div className="tv-loader-breathe absolute inset-0 flex flex-col items-center justify-center gap-2.5">
            <Image src="/images/logo.png" alt="" width={62} height={44} priority />
            <span className="font-heading text-[13px] leading-none text-ink whitespace-nowrap">
              <span className="font-bold">Techverge</span> <span className="text-ink-muted">Africa</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
