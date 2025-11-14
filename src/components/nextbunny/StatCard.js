// src/components/nextbunny/StatCard.js
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Props:
 *  - stat: { value: number|string, text: string }
 *  - index: number (for stagger)
 */

export default function StatCard({ stat, index = 0 }) {
  // -----------------------
  // Hooks (must always run)
  // -----------------------
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const [num, setNum] = useState(0); // used for animated numeric values
  const [display, setDisplay] = useState("—"); // final rendered display string

  // Determine shape (non-hook logic)
  const hasStat = Boolean(stat && typeof stat !== "undefined");
  const hasValue = hasStat && typeof stat.value !== "undefined" && stat.value !== null;

  // -----------------------
  // Effects
  // -----------------------
  // Effect: when stat changes, decide how to render
  useEffect(() => {
    // Reset
    if (!hasValue) {
      setDisplay("—");
      setNum(0);
      return;
    }

    // If value is a number (or numeric string), animate numeric
    const raw = stat.value;
    const numeric = typeof raw === "number" ? raw : Number(String(raw).replace(/[, ]+/g, ""));

    if (!Number.isNaN(numeric)) {
      // animate from 0 to numeric
      const duration = 700; // ms
      const start = performance.now();
      startRef.current = start;

      const step = (t) => {
        const elapsed = t - startRef.current;
        const tNorm = Math.min(1, elapsed / duration);
        const eased = tNorm; // linear easing; change if you want easing
        const cur = eased * numeric;
        setNum((Math.round(cur * 100) / 100));
        if (tNorm < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          // done
          setDisplay(String(numeric));
          startRef.current = null;
        }
      };

      // start
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(step);

      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
        startRef.current = null;
      };
    } else {
      // not numeric -> show raw string
      setDisplay(String(raw));
      setNum(0);
    }
  }, [stat, hasValue]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // -----------------------
  // Render fallback quickly if no data
  // -----------------------
  if (!hasValue) {
    // hooks already called above — ESLint happy
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: index * 0.06 }}
        viewport={{ once: true }}
        className="relative rounded-lg border border-white/8 bg-white/3 p-6 text-left shadow-sm"
      >
        <div className="text-2xl sm:text-3xl font-extrabold text-foreground">—</div>
        <p className="mt-2 text-sm text-muted-foreground">Data not available</p>
      </motion.div>
    );
  }

  // -----------------------
  // Normal render
  // -----------------------
  const isNumericDisplay = Number.isFinite(Number(String(stat.value).replace(/[, ]+/g, "")));

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="relative rounded-lg border border-white/8 bg-white/3 p-6 text-left shadow-sm"
      role="group"
    >
      <div className="text-2xl sm:text-3xl font-extrabold text-foreground">
        {isNumericDisplay ? (
          // show animated number while animating, fall back to final display
          <span aria-hidden>{num === 0 ? String(stat.value).startsWith("0") ? num : num : num}</span>
        ) : (
          <span>{String(stat.value)}</span>
        )}
      </div>

      <p className="mt-2 text-sm text-muted-foreground">{stat.text ?? ""}</p>
    </motion.div>
  );
}
