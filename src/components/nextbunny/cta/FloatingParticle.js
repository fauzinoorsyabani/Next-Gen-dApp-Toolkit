// FloatingParticle.js
"use client";
import React, { useMemo } from "react";

export default function FloatingParticle({ index = 0 }) {
  // simple randomization for position and size
  const rand = useMemo(() => {
    const seed = (index + 1) * 9301 % 49297;
    const r = 0.5 + (seed % 50) / 100;
    const left = (index * 37) % 100;
    const top = (index * 73) % 100;
    return { r, left, top };
  }, [index]);

  // hide many particles on small screens with CSS media query
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute transform-gpu opacity-30"
      style={{
        left: `${rand.left}%`,
        top: `${rand.top}%`,
        width: `${40 * rand.r}px`,
        height: `${40 * rand.r}px`,
        borderRadius: "50%",
        background: "linear-gradient(90deg,var(--tw-gradient-from, rgba(59,130,246,.2)), var(--tw-gradient-to, rgba(236,72,153,.2)))",
        filter: "blur(10px)",
        animation: `float-${index % 3} 8s ease-in-out ${index * 0.12}s infinite`,
      }}
    />
  );
}
