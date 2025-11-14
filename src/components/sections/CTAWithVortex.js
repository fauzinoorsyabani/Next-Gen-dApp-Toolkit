// src/components/sections/CTAWithVortex.js
import React from "react";
import Vortex from "../ui/Vortex";
import GlowButton from "../ui/glow-button"; // versi kamu
import { Button } from "../ui/button"; // fallback

export default function CTAWithVortex() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <Vortex
        backgroundColor="linear-gradient(180deg, rgba(8,10,15,0.8), rgba(2,6,23,0.85))"
        intensity={0.7}
        className="p-8"
      >
        <div className="mx-auto w-full max-w-3xl text-center rounded-xl px-6 py-12 backdrop-blur-sm border border-white/6 bg-white/3">
          <h3 className="text-3xl font-extrabold text-white md:text-5xl">
            Ready to launch faster?
          </h3>
          <p className="mt-3 text-slate-300 max-w-xl mx-auto">
            Ship a modern Web3 landing, connect wallets, and deploy in minutes.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <GlowButton variant="blue">Get Started</GlowButton>
            <Button variant="outline" className="!bg-transparent text-white">View Docs</Button>
          </div>

          <div className="mt-6 text-xs text-slate-400">
            Trusted by builders — secure, fast, and modular.
          </div>
        </div>
      </Vortex>
    </section>
  );
}
