'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Scroll reveal for the whole site (ui-ux-pro-max: stagger-sequence, transform-performance,
 * reduced-motion). Pages stay server components and opt in with attributes:
 *   data-reveal         the element fades and rises once when it scrolls into view
 *   data-reveal-group   its direct children do, one after another (staggered in CSS)
 * The hidden state only applies once this script has marked <html data-js>, so content is
 * never hidden for people without JavaScript, and prefers-reduced-motion skips it entirely.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.setAttribute('data-js', '');
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible), [data-reveal-group]:not(.is-visible)')
    );
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
