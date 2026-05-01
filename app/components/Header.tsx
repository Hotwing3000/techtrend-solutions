"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { mainNav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hovednavigation">
          {mainNav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-brand-700"
                    : "text-slate-700 hover:text-brand-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800 hover:shadow-md"
          >
            Få en gratis sikkerhedssamtale
            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M7.5 4.5L13 10l-5.5 5.5-1.4-1.4L10.2 10 6.1 5.9z" />
            </svg>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Åbn menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3" aria-label="Mobil navigation">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-brand-700 px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Få en gratis sikkerhedssamtale
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
