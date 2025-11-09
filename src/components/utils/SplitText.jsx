import React from "react";
import { motion } from "framer-motion";

/**
 * SplitText v2 — aman untuk children campuran (string + elemen)
 * - type: 'words' | 'chars'
 * - delay: jeda antar item
 * - duration: durasi tiap item
 * - fromY: offset awal
 */
export default function SplitText({
  children,
  type = "words",
  delay = 0.05,
  duration = 0.6,
  fromY = 24,
  className = "",
}) {
  const ease = [0.16, 1, 0.3, 1];

  const renderString = (text) => {
    const items = type === "chars" ? [...text] : text.split(" ");
    return items.map((item, i) => (
      <motion.span
        key={`s-${i}`}
        initial={{ opacity: 0, y: fromY }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ delay: i * delay, duration, ease }}
        className="inline-block will-change-transform"
      >
        {item === " " ? "\u00A0" : item}
        {type === "words" ? " " : ""}
      </motion.span>
    ));
  };

  const safeChildren = React.Children.map(children, (child, idx) => {
    if (typeof child === "string") return renderString(child);
    // kalau elemen (mis. <span>faster</span>) → render apa adanya
    return <span key={`n-${idx}`}>{child}</span>;
  });

  return (
    <span className={`inline-block ${className}`} aria-label="">
      {safeChildren}
    </span>
  );
}
