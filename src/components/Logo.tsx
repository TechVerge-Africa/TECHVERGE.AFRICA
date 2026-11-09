import Image from 'next/image';

/**
 * Brand lock-up (until a designer delivers the final wordmark):
 * the V mark, then "Techverge" in Sora Bold and "Africa" in Sora Regular.
 * Cap height about 40% of the mark; gap of half the mark's width.
 * The supplied mark file is used as-is: never redrawn, recoloured or given effects.
 * Approved grounds: light grey, white or navy.
 */
const MARK_RATIO = 563 / 400; // width / height of /images/logo.png

type LogoProps = {
  /** Mark height in px. Minimum 24 px on screens. */
  size?: number;
  /** 'dark' text on light grounds, 'light' text on navy. */
  tone?: 'dark' | 'light';
  priority?: boolean;
};

export default function Logo({ size = 32, tone = 'dark', priority = false }: LogoProps) {
  const height = Math.max(size, 24);
  const width = Math.round(height * MARK_RATIO);
  const fontSize = Math.round(height * 0.55); // Sora cap height ≈ 0.72em → ≈ 40% of the mark

  return (
    <span className="inline-flex items-center" style={{ gap: Math.round(width / 2) }}>
      <Image src="/images/logo.png" alt="" width={width} height={height} priority={priority} className="shrink-0" />
      <span
        className={`font-heading leading-none whitespace-nowrap ${tone === 'light' ? 'text-white' : 'text-ink'}`}
        style={{ fontSize }}
      >
        <span className="font-bold">Techverge</span>{' '}
        <span className={`font-normal ${tone === 'light' ? 'text-white/80' : 'text-ink-muted'}`}>Africa</span>
      </span>
    </span>
  );
}
