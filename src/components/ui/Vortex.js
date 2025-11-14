// src/components/ui/Vortex.js
import React from "react";

/**
 * Vortex
 * - simple animated layered gradient + blur "vortex" background
 * - children rendered centered
 *
 * Props:
 *  - className: tambahan class
 *  - backgroundColor: css color for base background (default: transparent)
 *  - intensity: number 0..1 for brightness (optional)
 */
export default function Vortex({
  children,
  className = "",
  backgroundColor = "transparent",
  intensity = 0.6,
  ariaLabel = "Decorative animated background"
}) {
  // inline styles for color customization
  const rootStyle = {
    background: backgroundColor,
  };

  const glowStyle = {
    // opacity depends on intensity
    opacity: Math.max(0, Math.min(1, intensity)),
  };

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={rootStyle}
    >
      {/* Layer 1: subtle radial glow that slowly moves */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          mixBlendMode: "screen",
        }}
      >
        <div
          className="absolute left-[-20%] top-[-10%] h-[420px] w-[420px] rounded-full blur-3xl animate-vortex-slide"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.35), transparent 30%)",
            ...glowStyle,
          }}
        />
        <div
          className="absolute right-[-25%] bottom-[-5%] h-[520px] w-[520px] rounded-full blur-3xl animate-vortex-slide-rev"
          style={{
            background:
              "radial-gradient(circle at 70% 70%, rgba(16,185,129,0.22), transparent 30%)",
            ...glowStyle,
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"
          style={{ mixBlendMode: "overlay" }}
        />
      </div>

      {/* Optional subtle rotating ring (decor) */}
      <svg
        aria-hidden
        className="absolute -z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 w-[140%] h-[140%] pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="vortexRing" cx="50%" cy="40%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.02)" />
            <stop offset="60%" stopColor="rgba(255,255,255,0.00)" />
          </radialGradient>
        </defs>
        <g className="animate-vortex-rotate">
          <circle cx="50" cy="50" r="36" fill="none" stroke="url(#vortexRing)" strokeWidth="0.6" />
          <circle cx="50" cy="50" r="50" fill="none" stroke="url(#vortexRing)" strokeWidth="0.4" />
        </g>
      </svg>

      {/* Content container: center children */}
      <div className="relative z-10 flex w-full h-full items-center justify-center">
        {children}
      </div>

      {/* small CSS animations (scoped via tailwind utility + custom classes below) */}
      <style jsx>{`
        /* keyframes */
        @keyframes vortexSlide {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(6%, -4%, 0) scale(1.03); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
        @keyframes vortexSlideRev {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-6%, 4%, 0) scale(1.02); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
        @keyframes vortexRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-vortex-slide { animation: vortexSlide 10s linear infinite; }
        .animate-vortex-slide-rev { animation: vortexSlideRev 12s linear infinite; }
        .animate-vortex-rotate { animation: vortexRotate 40s linear infinite; transform-origin: 50% 50%; }
      `}</style>
    </div>
  );
}
