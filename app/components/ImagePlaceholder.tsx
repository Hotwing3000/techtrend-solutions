type Props = {
  label: string;
  ratio?: "video" | "square" | "wide" | "portrait";
  className?: string;
  tone?: "blue" | "slate" | "cyan";
};

const ratioMap: Record<NonNullable<Props["ratio"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[16/7]",
  portrait: "aspect-[3/4]",
};

const toneMap: Record<NonNullable<Props["tone"]>, string> = {
  blue: "from-brand-100 via-brand-50 to-white text-brand-700",
  slate: "from-slate-200 via-slate-100 to-white text-slate-600",
  cyan: "from-accent-400/30 via-brand-100 to-white text-brand-700",
};

export function ImagePlaceholder({
  label,
  ratio = "video",
  className = "",
  tone = "blue",
}: Props) {
  return (
    <div
      role="img"
      aria-label={`Pladsholder: ${label}`}
      className={`relative ${ratioMap[ratio]} w-full overflow-hidden rounded-2xl bg-gradient-to-br ${toneMap[tone]} ring-1 ring-slate-200 ${className}`}
    >
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="9" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span className="text-xs font-medium uppercase tracking-wider opacity-80">Billedpladsholder</span>
        <span className="max-w-xs text-sm font-medium">{label}</span>
      </div>
    </div>
  );
}
