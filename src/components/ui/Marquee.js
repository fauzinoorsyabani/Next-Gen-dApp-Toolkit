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

  // animasi
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

  return (
    <div
      {...props}
      ref={viewportRef}
      className={cn(
        "relative overflow-hidden",
        className
      )}
      onMouseEnter={() => (pauseOnHover ? (pausedRef.current = true) : null)}
      onMouseLeave={() => (pauseOnHover ? (pausedRef.current = false) : null)}
    >
      {/* track berisi 2 set identik */}
      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        style={{ transform: "translateX(0px)" }}
      >
        <div ref={set1Ref} className="flex items-center gap-6">
          {/* SET 1 */}
          {children}
        </div>
        <div className="flex items-center gap-6" aria-hidden="true">
          {/* SET 2 (duplikat) */}
          {children}
        </div>
      </div>
    </div>
  );
}
