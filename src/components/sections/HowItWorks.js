import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const steps = [
  {
    num: "01",
    title: "Craft your compelling headline and value proposition.",
    desc: "Start by defining what makes your project unique. Write a clear, compelling headline that immediately communicates your value to visitors within seconds of landing on your page",
  },
  {
    num: "02",
    title: "Combine Hero, Features, Pricing, and FAQ sections.",
    desc: "Now comes the fun part—building your page like assembling blocks. Our modular system lets you drag and drop pre-built sections in whatever order makes sense for your story.",
  },
  {
    num: "03",
    title: "Deploy instantly to Vercel",
    desc: "When you're happy with your design, deployment is just one click away. Our seamless Vercel integration means your landing page goes live in minutes, hosted on a lightning-fast CDN with automatic"},
];

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-28 -mx-auto max-w-6xl px-4 py-16 md:py-20">
      <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
        How it works
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-slate-300">
        Tiga langkah sederhana untuk meluncurkan landing page modern.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <Card key={s.num}>
            <CardHeader>
              <CardTitle className="text-white flex items-baseline gap-3">
                <span className="text-sm font-mono text-slate-400">{s.num}</span>
                <span>{s.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>{s.desc}</CardContent>
          </Card>
        ))}
      </div>

      
    </section>
  );
}
