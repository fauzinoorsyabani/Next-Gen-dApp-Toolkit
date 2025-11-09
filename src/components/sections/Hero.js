import React from "react";
import { Button } from "../ui/button";
import SplitText from "../utils/SplitText";
import { motion } from "framer-motion";
import GlowButton from "../ui/glow-button";
import Pattern from "../background/Pattern";
import HeroPreview from "./HeroPreview";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen bg-clate-900 text-white overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-1/3 top-1/3 h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
        {/* Left */}
        <div>
          <p className="text-sm uppercase tracking-widest text-indigo-300">
            Next-Gen dApp Toolkit
          </p>

          {/* Headline animasi per kata */}
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            <SplitText type="words" delay={0.05} fromY={24}>
              Build Web3 interfaces{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                faster
              </span>
            </SplitText>
          </h1>

          {/* Paragraf: fade-in ringan */}
          <motion.p
            className="mt-4 max-w-prose text-slate-300"
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Modern React + Tailwind components with web3 vibes. Ship your
            landing page, dashboards, and token utilities in days, not weeks.
          </motion.p>

          {/* CTA */}
          <div className="mt-5 flex gap-3">
            <GlowButton variant="red">Get Started</GlowButton>
            <GlowButton variant="blue">Docs</GlowButton>
          </div>
        </div>

        {/* Right: preview card dengan fade+scale */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <HeroPreview/>
          <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-xl border border-white/10 bg-white/5" />
          <div className="pointer-events-none absolute -top-6 -right-10 h-20 w-20 rounded-full border border-white/10 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
