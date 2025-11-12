"use client";

import { Sparkles, ArrowRight, Check, Star, Zap, Shield } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/* -- Reusable small card pieces -- */
const Card = ({ className, children }) => (
  <div
    className={cn(
      "rounded-2xl border bg-slate-900/50 text-white shadow-lg",
      "backdrop-blur-md",
      className
    )}
  >
    {children}
  </div>
);
const CardHeader = ({ className, children }) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)}>{children}</div>
);
const CardTitle = ({ className, children }) => (
  <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)}>
    {children}
  </h3>
);
const CardDescription = ({ className, children }) => (
  <div className={cn("text-sm text-slate-300", className)}>{children}</div>
);
const CardContent = ({ className, children }) => (
  <div className={cn("p-6 pt-0", className)}>{children}</div>
);
const CardFooter = ({ className, children }) => (
  <div className={cn("flex items-center p-6 pt-0", className)}>{children}</div>
);

/* Numeric animation */
const AnimatedNumber = ({ value, format, className }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    const duration = 600;
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min(1, (timestamp - startTimeRef.current) / duration);
      const newValue = progress * value;
      setCurrentValue(newValue);
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        startTimeRef.current = null;
        setCurrentValue(value);
      }
    };
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    startTimeRef.current = null;
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [value]);

  const formatter =
    format && format.style === "currency"
      ? new Intl.NumberFormat("en-US", {
          style: format.style,
          currency: format.currency,
          maximumFractionDigits: format.maximumFractionDigits ?? 0,
        })
      : new Intl.NumberFormat("en-US");

  return <span className={className}>{formatter.format(Math.round(currentValue))}</span>;
};

/* Plans data */
const plans = [
  {
    id: "starter",
    name: "Starter AI",
    icon: Star,
    price: { monthly: "Free forever", yearly: "Free forever" },
    description: "Kickstart your AI journey with essential features for personal projects.",
    features: [
      "1,000 AI generations / month",
      "Basic AI model access",
      "Community support",
      "Standard processing speed",
      "500MB storage for models",
    ],
    cta: "Start for Free",
  },
  {
    id: "pro",
    name: "Pro AI",
    icon: Zap,
    price: { monthly: 90, yearly: 75 },
    description: "Unlock advanced AI capabilities for your growing applications.",
    features: [
      "Unlimited AI generations",
      "Premium AI model access",
      "Priority email support",
      "High-speed processing",
      "10GB storage for models",
    ],
    cta: "Subscribe to Pro AI",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise AI",
    icon: Shield,
    price: { monthly: "Contact for pricing", yearly: "Contact for pricing" },
    description: "Tailored AI solutions for large-scale deployments and critical needs.",
    features: [
      "Customizable AI models",
      "Dedicated technical account manager",
      "On-premise deployment options",
      "Ultra-low latency processing",
      "Unlimited secure storage",
    ],
    cta: "Request a Demo",
  },
];

export default function SimplePricing() {
  const [frequency, setFrequency] = useState("monthly");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="relative py-24 px-4 sm:px-8">
      {/* background glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[8%] left-1/2 h-[36%] w-[60%] -translate-x-1/2 rounded-full bg-indigo-700/10 blur-3xl" />
        <div className="absolute -bottom-[12%] right-0 h-[36%] w-[40%] rounded-full bg-cyan-600/6 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium text-primary mb-4">
          <Sparkles className="h-4 w-4 text-primary" />
          AI Subscription Plans
        </span>

        <h2 className="mb-2 text-4xl font-extrabold text-white sm:text-5xl">
          Choose the AI plan that powers your innovation
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-300">
          Flexible and powerful AI plans designed to scale with your needs, from hobby projects to enterprise solutions.
        </p>

        {/* toggle */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex rounded-full bg-muted/20 p-1">
            <button
              onClick={() => setFrequency("monthly")}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition",
                frequency === "monthly" ? "bg-background shadow" : "hover:bg-muted/40"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setFrequency("yearly")}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition",
                frequency === "yearly" ? "bg-background shadow" : "hover:bg-muted/40"
              )}
            >
              Yearly <span className="ml-2 inline-block rounded-full bg-primary/10 px-2 text-xs font-semibold text-primary">20% off</span>
            </button>
          </div>
        </div>

        {/* GRID: md:grid-cols-4 -> middle card spans 2 cols */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {plans.map((plan, idx) => {
            const spanClass = plan.popular ? "md:col-span-2" : "md:col-span-1";
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 + idx * 0.08 }}
                whileHover={{ y: -6 }}
                className={cn("flex", spanClass)}
              >
                <Card
                  className={cn(
                    "w-full transform transition",
                    plan.popular
                      ? "bg-gradient-to-b from-indigo-900/60 to-slate-900/60 ring-2 ring-indigo-500/20 shadow-2xl"
                      : "bg-slate-900/40"
                  )}
                >
                  {/* popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 z-10 flex -translate-x-1/2">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1 text-sm font-semibold text-indigo-300 shadow">
                        <Sparkles className="h-4 w-4 text-indigo-300" /> Most Popular
                      </span>
                    </div>
                  )}

                  <CardHeader className={cn(plan.popular && "pt-8")}>
                    <div className="flex items-center gap-3">
                      <div className={cn("flex h-10 w-10 items-center justify-center rounded-full", plan.popular ? "bg-indigo-700/20 text-indigo-300" : "bg-slate-800 text-slate-200")}>
                        <plan.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className={cn(plan.popular && "text-indigo-200")}>{plan.name}</CardTitle>
                    </div>

                    <CardDescription className="mt-3">
                      <p className="text-sm text-slate-300">{plan.description}</p>

                      <div className="mt-3">
                        {typeof plan.price[frequency] === "number" ? (
                          <div className="flex items-baseline gap-2">
                            <AnimatedNumber
                              className={cn("text-3xl font-extrabold", plan.popular ? "text-indigo-300" : "text-white")}
                              format={{ style: "currency", currency: "USD", maximumFractionDigits: 0 }}
                              value={plan.price[frequency]}
                            />
                            <span className="text-sm text-slate-400">/month, billed {frequency}</span>
                          </div>
                        ) : (
                          <div className={cn("text-2xl font-bold", plan.popular ? "text-indigo-300" : "text-white")}>
                            {plan.price[frequency]}
                          </div>
                        )}
                      </div>
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="grid gap-3">
                      {plan.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                          <div className={cn("flex h-6 w-6 items-center justify-center rounded-full", plan.popular ? "bg-indigo-800 text-indigo-300" : "bg-slate-800 text-slate-300")}>
                            <Check className="h-3.5 w-3.5" />
                          </div>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter>
                    <button
                      className={cn(
                        "w-full rounded-md px-4 py-3 text-sm font-semibold transition",
                        plan.popular
                          ? "bg-indigo-500 text-white hover:bg-indigo-600 shadow-md"
                          : "border border-slate-700 bg-transparent text-white hover:bg-slate-800"
                      )}
                    >
                      {plan.cta} <ArrowRight className="ml-2 inline-block h-4 w-4" />
                    </button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
