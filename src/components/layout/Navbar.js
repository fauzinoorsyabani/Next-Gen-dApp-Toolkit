import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import logo from "../../assets/logo.png"; // or .svg
import GlowButton from "../ui/glow-button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Tutup menu saat resize >= md
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Kunci scroll saat menu terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2 text-white font-semibold">
          <img src={logo} alt="Logo" className="h-7 w-auto rounded-full select-none" />NEXT-GEN<span className="sr-only"></span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing">
          <GlowButton variant="purple" className="w-auto h-11 w-15">Get Started</GlowButton></a>
        </div>


        {/* Hamburger (mobile) */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-200"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Overlay (klik untuk menutup) */}
      <div
        onClick={() => setOpen(false)}
        className={`${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} md:hidden fixed inset-0 z-40 bg-black/40 transition-opacity`}
      />

      {/* Panel mobile */}
      <div
        className={`md:hidden fixed right-3 left-3 top-16 z-50 rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur transition-[transform,opacity] duration-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
      >
        <div className="px-4 py-3">
          <nav className="grid gap-2 text-slate-200 text-base">
            <a href="#features" onClick={() => setOpen(false)} className="py-2">Features</a>
            <a href="#how" onClick={() => setOpen(false)} className="py-2">How it works</a>
            <a href="#pricing" onClick={() => setOpen(false)} className="py-2">Pricing</a>
            <a href="#partners" onClick={() => setOpen(false)} className="py-2">Partners</a>
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <a href="#pricing" onClick={() => setOpen(false)} className="flex-1">
                <GlowButton variant="blue" className="w-full h-11">Get Started</GlowButton>
            </a>

            
          </div>
        </div>
      </div>
    </header>
  );
}
