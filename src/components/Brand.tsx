/**
 * Brand decoration kit: Verge Blue, Deep Navy, Growth Green and Spark Orange,
 * taken from the V mark and the brand guide's cover (slanted stripes leaning ~30°).
 * Purely decorative: every element here is aria-hidden.
 */

/** Thin slanted tri-colour strip: blue, orange and green meeting, like the V. */
export function BrandBar({ className = 'h-1' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`w-full ${className}`}
      style={{
        background:
          'linear-gradient(115deg, #14357F 0 22%, #2D66F5 22% 52%, #FFFFFF 52% 53%, #EC782E 53% 66%, #FFFFFF 66% 67%, #5BAA42 67% 100%)',
      }}
    />
  );
}

/**
 * The guide's cover motif: parallel bands leaning ~30° (tan 30° ≈ 0.577).
 * Place inside a `relative overflow-hidden` navy container.
 */
export function BrandStripes({
  className = '',
  opacity = 1,
  anchor = 'right',
}: {
  className?: string;
  opacity?: number;
  /** Which edge of the motif stays visible when the box is narrower than the art. */
  anchor?: 'left' | 'right';
}) {
  // Each band: [x offset at the bottom, width, colour]
  const bands: [number, number, string][] = [
    [0, 70, '#1D4597'], // soft navy band
    [90, 120, '#2D66F5'], // Verge Blue
    [228, 34, '#EC782E'], // Spark Orange
    [280, 96, '#5BAA42'], // Growth Green
    [394, 60, '#1D4597'],
  ];
  const lean = 346; // 600px tall × tan 30°
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      viewBox="0 0 800 600"
      preserveAspectRatio={anchor === 'left' ? 'xMinYMid slice' : 'xMaxYMid slice'}
      style={{ opacity }}
    >
      {bands.map(([x, w, c]) => (
        <polygon key={x} points={`${x},600 ${x + w},600 ${x + w + lean},0 ${x + lean},0`} fill={c} />
      ))}
    </svg>
  );
}

/** Rotating brand tones for cards and icon tiles, so colour carries rhythm, not meaning. */
export const tones = [
  {
    tile: 'bg-brand-blue/10 border border-brand-blue/20 text-action-primary',
    text: 'text-action-primary',
    top: 'border-t-4 border-t-brand-blue',
    dot: 'bg-brand-blue',
  },
  {
    tile: 'bg-brand-green/15 border border-brand-green/30 text-brand-green-deep',
    text: 'text-brand-green-deep',
    top: 'border-t-4 border-t-brand-green',
    dot: 'bg-brand-green',
  },
  {
    tile: 'bg-brand-orange/15 border border-brand-orange/30 text-brand-orange-deep',
    text: 'text-brand-orange-deep',
    top: 'border-t-4 border-t-brand-orange',
    dot: 'bg-brand-orange',
  },
] as const;

export const tone = (i: number) => tones[i % tones.length];
