import React from "react";
import GlowButton from "../ui/glow-button";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-600/30 to-cyan-600/30 p-8 text-center backdrop-blur">
        <h3 className="text-2xl font-bold text-white">Ready to launch?</h3>
        <p className="mt-2 text-slate-200">
          Use these components to ship your web3 landing today.
        </p>

        <div className="mt-5 flex justify-center gap-3">
          <GlowButton variant="blue">Get Started</GlowButton>
          <GlowButton variant="pink">View Docs</GlowButton>
        </div>
      </div>
    </section>
  );
}
