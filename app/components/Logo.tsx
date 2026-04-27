import Link from "next/link";

type LogoProps = {
  variant?: "full" | "icon";
  className?: string;
};

export function Logo({ variant = "full", className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="TechTrend Solutions forside"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <LogoMark className="h-9 w-9" />
      {variant === "full" && (
        <span className="font-display text-xl font-bold tracking-tight text-slate-900">
          TechTrend
          <span className="ml-1 font-medium text-slate-500">Solutions</span>
        </span>
      )}
    </Link>
  );
}

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="TechTrend Solutions logo"
    >
      <defs>
        <linearGradient id="ttg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path
        d="M20 2.5 L34 8 V20 C34 28.5 28 34.5 20 37.5 C12 34.5 6 28.5 6 20 V8 L20 2.5 Z"
        fill="url(#ttg)"
      />
      <path
        d="M14 19.5 L18.5 24 L26.5 16"
        fill="none"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
