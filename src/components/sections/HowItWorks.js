// src/components/sections/HowItWorks.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, Rocket } from "lucide-react";

/**
 * Premium HowItWorks component.
 * Copy/replace this file into src/components/sections/HowItWorks.js
 *
 * Requirements:
 *  - Tailwind CSS
 *  - framer-motion
 *  - lucide-react (for icons)
 *
 * Design notes:
 *  - glass card with gradient border and soft shadow
 *  - larger typography, comfortable spacing
 *  - no micro-numbers or emojis
 */

const STEPS = [
  {
    id: "craft",
    title: "Craft a compelling headline",
    desc:
      "Define what makes your project unique and write a concise value proposition that converts visitors into users.",
    icon: Sparkles,
    accent: "from-indigo-400 to-cyan-300",
  },
  {
    id: "assemble",
    title: "Assemble modular sections",
    desc:
      "Build pages fast using reusable blocks (Hero, Features, Pricing, FAQ). Drag, drop, and reorder with confidence.",
    icon: Layers,
    accent: "from-cyan-300 to-emerald-300",
  },
  {
    id: "ship",
    title: "Ship & scale effortlessly",
    desc:
      "Deploy to your provider in one click. Serve from a fast CDN with atomic deploys and automatic builds.",
    icon: Rocket,
    accent: "from-pink-400 to-rose-400",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardMotion = {
  hidden: { opacity: 0, y: 14, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1 },
};

function IconCircle({ Icon, gradient }) {
  return (
    <div
      className={
        "flex h-14 w-14 items-center justify-center rounded-xl ring-1 ring-white/6 " +
        "bg-gradient-to-br " +
        gradient
      }
      aria-hidden
    >
      <Icon className="h-7 w-7 text-white/95" />
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-28 py-24 px-4 md:px-8">
      {/* Backdrop and soft glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[720px] h-[380px] rounded-full bg-gradient-to-br from-indigo-700/10 to-cyan-400/6 blur-3xl" />
        <div className="absolute right-8 bottom-0 w-[360px] h-[280px] rounded-full bg-gradient-to-tr from-pink-600/6 to-indigo-600/8 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 to-slate-950/100" />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-cyan-300 to-sky-200">
          How it works
        </h2>
        <p className="mt-3 max-w-xl mx-auto text-lg text-slate-300">
          Tiga langkah sederhana untuk meluncurkan landing page modern — clear,
          fast, and production ready.
        </p>
      </div>

      {/* Grid */}
      <motion.div
        className="mx-auto max-w-7xl grid grid-cols-1 gap-6 md:grid-cols-3 px-2 md:px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={container}
      >
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          // make middle card slightly taller on desktop for staggered layout
          const extraClass =
            idx === 1 ? "md:col-span-1 md:row-span-1 md:self-start" : "";
          return (
            <motion.article
              key={step.id}
              variants={cardMotion}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className={`relative flex flex-col justify-between rounded-2xl border border-white/8 bg-gradient-to-b from-white/3 to-transparent p-6 shadow-[0_18px_60px_rgba(2,6,23,0.6)] ${extraClass}`}
              aria-labelledby={`how-${step.id}-title`}
              tabIndex={0}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <IconCircle Icon={Icon} gradient={step.accent} />
                </div>

                <div className="flex-1">
                  <h3 id={`how-${step.id}-title`} className="text-lg md:text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-xs text-slate-400">Optimized • Accessible • Tiny bundle</div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1 text-sm text-white/90 ring-1 ring-white/6 backdrop-blur-sm hover:bg-white/8 transition"
                >
                  Learn more
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 12h14M13 5l6 7-6 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* subtle inner border glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent [box-shadow:inset_0_1px_0_rgba(255,255,255,0.02)]" />
            </motion.article>
          );
        })}
      </motion.div>

      <div className="mx-auto mt-10 max-w-3xl text-center">
        <p className="text-sm text-slate-500">
          Designed for performance, accessibility, and developer ergonomics.
        </p>
      </div>
    </section>
  );
}
