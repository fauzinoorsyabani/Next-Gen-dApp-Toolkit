import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import GlowButton from "../ui/glow-button";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    features: ["1 template", "Basic sections", "Responsive"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9/mo",
    features: ["All templates", "FAQ + Pricing", "Email support"],
    cta: "Choose Pro",
    highlighted: true,
  },
  {
    name: "Studio",
    price: "$49/mo",
    features: ["Whitelabel", "Team seats", "Priority support"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-28 mx-auto max-w-6xl px-4 py-16 md:py-20">
      <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
        Pricing
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-slate-300">
        Mulai gratis. Upgrade saat kamu butuh lebih.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <Card key={t.name} className={t.highlighted ? "ring-2 ring-indigo-400" : ""}>
            <CardHeader>
              <CardTitle className="text-white">{t.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-extrabold text-white">{t.price}</div>
              <ul className="mt-4 space-y-1 text-slate-300">
                {t.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Button className="w-full" variant={t.highlighted ? "default" : "outline"}>
                  {t.cta}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
