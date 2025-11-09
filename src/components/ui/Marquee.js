// src/components/ui/Marquee.js
import React, { useRef, useEffect, useCallback } from "react";

const cn = (...x) => x.filter(Boolean).join(" ");

export default function Marquee({
  className,
  speed = 60,         // px per detik
  reverse = false,
  pauseOnHover = true,
  children,
  ...props
}) {
  const viewportRef = useRef(null);
  const trackRef    = useRef(null);
  const set1Ref     = useRef(null);
  const xRef        = useRef(0);
  const pausedRef   = useRef(false);
  const rafRef      = useRef(null);

  // get gap value: prefer CSS var --gap on container, else fallback to computed columnGap or 24px
  const readGap = () => {
    try {
      if (viewportRef.current) {
        const s = window.getComputedStyle(viewportRef.current);
        const cssVar = s.getPropertyValue("--gap");
        if (cssVar) {
          const parsed = parseFloat(cssVar);
          if (!isNaN(parsed)) return parsed;
        }
      }
      // fallback: try computed style of inner set (columnGap)
      if (set1Ref.current) {
        const s2 = window.getComputedStyle(set1Ref.current);
        const col = s2.columnGap || s2.getPropertyValue("column-gap") || s2.getPropertyValue("gap");
        const parsed2 = parseFloat(col);
        if (!isNaN(parsed2)) return parsed2;
      }
    } catch (e) {}
    return 24; // default px fallback (approx gap-6 = 1.5rem => 24px)
  };

  // animation
  const tick = useCallback((tPrev) => {
    let prev = tPrev;
    const loop = (tNow) => {
      const dt = prev ? (tNow - prev) / 1000 : 0;
      prev = tNow;

      if (!pausedRef.current && set1Ref.current && trackRef.current) {
        const setW = set1Ref.current.offsetWidth; // panjang 1 set penuh
        const v    = (reverse ? 1 : -1) * speed;  // px/detik
        xRef.current += v * dt;

        // reset mulus saat satu set habis
        if (xRef.current <= -setW) xRef.current += setW;
        if (xRef.current >= 0)     xRef.current -= setW;

        trackRef.current.style.transform = `translateX(${xRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
  }, [speed, reverse]);

  useEffect(() => {
    tick(performance.now());
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [tick]);

  // pause handlers
  const onEnter = () => { if (pauseOnHover) pausedRef.current = true; };
  const onLeave = () => { if (pauseOnHover) pausedRef.current = false; };

  // compute spacer width (readGap) and apply as inline style to spacer element
  const spacerWidth = readGap();

  return (
    <div
      {...props}
      ref={viewportRef}
      className={cn(
        "relative overflow-hidden",
        className
      )}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* track berisi SET1 - SPACER - SET2 */}
      <div
        ref={trackRef}
        className="flex w-max will-change-transform items-center"
        style={{ transform: "translateX(0px)" }}
      >
        {/* SET 1 */}
        <div ref={set1Ref} className="flex items-center" style={{ gap: "var(--gap, 1.5rem)", display: "flex", flexWrap: "nowrap" }}>
          {React.Children.toArray(children).map((child, i) => (
            <div key={i} style={{ flex: "0 0 auto" }}>{child}</div>
          ))}
        </div>

        {/* SPACER kecil supaya akhir SET1 dan awal SET2 tidak menempel */}
        <div aria-hidden="true" style={{ width: `${spacerWidth}px`, flex: "0 0 auto" }} />

        {/* SET 2 (duplikat) */}
        <div className="flex items-center" aria-hidden="true" style={{ gap: "var(--gap, 1.5rem)", display: "flex", flexWrap: "nowrap" }}>
          {React.Children.toArray(children).map((child, i) => (
            <div key={`dup-${i}`} style={{ flex: "0 0 auto" }}>{child}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
