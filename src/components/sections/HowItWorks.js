// src/components/sections/HowItWorks.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, Rocket } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"; // your existing card

const steps = [
  {
    id: 1,
    num: "01",
    title: "Craft your compelling headline and value proposition.",
    desc:
      "Start by defining what makes your project unique. Write a clear, compelling headline that immediately communicates your value to visitors within seconds of landing on your page.",
    icon: <Sparkles className="h-6 w-6" />,
    accent: "from-indigo-500/6 to-indigo-600/3",
  },
  {
    id: 2,
    num: "02",
    title: "Combine Hero, Features, Pricing, and FAQ sections.",
    desc:
      "Now comes the fun part—building your page like assembling blocks. Our modular system lets you drag and drop pre-built sections in whatever order makes sense for your story.",
    icon: <Layers className="h-6 w-6" />,
    accent: "from-cyan-500/6 to-cyan-600/3",
  },
  {
    id: 3,
    num: "03",
    title: "Deploy instantly to Vercel",
    desc:
      "When you're happy with your design, deployment is just one click away. Our seamless Vercel integration means your landing page goes live in minutes, hosted on a lightning-fast CDN.",
    icon: <Rocket className="h-6 w-6" />,
    accent: "from-pink-500/6 to-rose-500/3",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative scroll-mt-28 overflow-hidden py-20 px-4"
    >
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[720px] h-[380px] rounded-full bg-indigo-700/10 blur-3xl" />
        <div className="absolute right-8 bottom-0 w-[420px] h-[320px] rounded-full bg-cyan-600/6 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-950/95" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-sky-300">
          How it works
        </h2>
        <p className="mt-3 text-lg text-slate-300">
          Tiga langkah sederhana untuk meluncurkan landing page modern.
        </p>
      </div>

      <motion.div
        className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={container}
      >
        {steps.map((s) => (
          <motion.div
            key={s.id}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.36, ease: "easeOut" }}
            className="relative"
          >
            <Card
              className={
                "relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br p-0 shadow-xl"
              }
            >
              {/* accent strip (top) */}
              <div
                className={`absolute inset-x-6 -top-6 -z-10 h-40 rounded-2xl bg-gradient-to-br ${s.accent} opacity-40 blur-2xl`}
                aria-hidden
              />

              <div className="p-6">
                <CardHeader className="p-0">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/4 ring-1 ring-white/6">
                      <div className="text-indigo-300">{s.icon}</div>
                    </div>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-sm font-mono text-slate-400">
                          {s.num}
                        </span>
                        <CardTitle className="text-base font-semibold text-white leading-snug">
                          {s.title}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="mt-4 text-slate-300">
                  <p className="text-sm leading-relaxed">{s.desc}</p>
                </CardContent>
              </div>

              {/* subtle bottom glass */}
              <div className="pointer-events-none absolute inset-x-4 bottom-4 -z-10 h-12 rounded-lg bg-gradient-to-t from-black/20 to-transparent opacity-30" />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
