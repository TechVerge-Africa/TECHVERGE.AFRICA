'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/*
 * Loading feedback should match the expected wait and never flash for near-instant work
 * (ui-ux-pro-max: loading-states, High). So:
 * - the opening splash plays once per browser session, not on every full page load;
 * - between pages the overlay only appears when the navigation is actually slow;
 * - once shown, it stays long enough to read as deliberate rather than as a flicker.
 */
const SPLASH_KEY = 'tv-splash-seen';
const MIN_SPLASH_MS = 600; // first open of the site in this session
const ROUTE_DELAY_MS = 300; // only show the route overlay if navigation takes longer than this
const MIN_ROUTE_VISIBLE_MS = 400; // once shown, keep it at least this long
const MAX_WAIT_MS = 8000; // never block the page longer than this

// Runs before first paint: visitors who have already seen the splash never see it flash.
const SPLASH_SEEN_SCRIPT = `try{if(sessionStorage.getItem('${SPLASH_KEY}'))document.documentElement.setAttribute('data-splash-seen','')}catch(e){}`;

export default function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true); // server-rendered visible: the opening splash
  const [ready, setReady] = useState(false); // false until hydrated: lets CSS hide a seen splash before paint
  const showTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shownAt = useRef<number | null>(null);
  const lastPath = useRef(pathname);

  // Opening splash, once per session.
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SPLASH_KEY) !== null;
      sessionStorage.setItem(SPLASH_KEY, '1');
    } catch {
      /* storage blocked: treat as a first visit */
    }
    setReady(true);
    if (seen) {
      setVisible(false);
      return;
    }
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

  // Internal link clicked: arm the overlay, but only reveal it if the page is slow to arrive.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.('a');
      if (!a || !a.href || a.target === '_blank' || a.hasAttribute('download')) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // same page or #hash jump
      if (showTimer.current) clearTimeout(showTimer.current);
      showTimer.current = setTimeout(() => {
        shownAt.current = performance.now();
        setVisible(true);
      }, ROUTE_DELAY_MS);
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  // The new page is on screen.
  useEffect(() => {
    if (pathname === lastPath.current) return;
    lastPath.current = pathname;
    if (showTimer.current) {
      clearTimeout(showTimer.current); // fast navigation: the overlay never appears
      showTimer.current = null;
    }
    if (shownAt.current === null) return;
    const wait = Math.max(0, MIN_ROUTE_VISIBLE_MS - (performance.now() - shownAt.current));
    shownAt.current = null;
    const t = setTimeout(() => setVisible(false), wait);
    return () => clearTimeout(t);
  }, [pathname]);

  // Safety net: never leave the overlay up.
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setVisible(false), MAX_WAIT_MS);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: SPLASH_SEEN_SCRIPT }} />
      {/* Without JavaScript the overlay could never be dismissed, so don't show it at all. */}
      <noscript>
        <style>{'.tv-loader{display:none!important}'}</style>
      </noscript>
      <div
        className={`tv-loader ${ready ? 'tv-ready' : ''} fixed inset-0 z-[100] flex items-center justify-center bg-surface-0 transition-opacity ${
          visible ? 'opacity-100 duration-200' : 'opacity-0 duration-300 pointer-events-none'
        }`}
        role="status"
        aria-live="polite"
        aria-hidden={!visible}
      >
        <span className="sr-only">{visible ? 'Loading Techverge Africa' : ''}</span>

        <div className="relative h-44 w-44">
          {/* Spinning arcs: the V's three colours. This is the loading indicator itself. */}
          <svg viewBox="0 0 176 176" className="tv-loader-spin absolute inset-0 h-full w-full" aria-hidden="true">
            <circle cx="88" cy="88" r="80" fill="none" stroke="#2D66F5" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="130 373" />
            <circle cx="88" cy="88" r="80" fill="none" stroke="#EC782E" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="16 487" strokeDashoffset="-142" />
            <circle cx="88" cy="88" r="80" fill="none" stroke="#5BAA42" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="130 373" strokeDashoffset="-252" />
          </svg>

          {/* The logo, unchanged, with the lock-up text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
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
