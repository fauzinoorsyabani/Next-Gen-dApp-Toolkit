import React from "react";

export default function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur
                    ring-1 ring-white/10 md:mx-0">
      {/* gradient frame */}
      <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-indigo-500/10 via-fuchsia-500/10 to-cyan-500/10" />
      {/* image */}
      <img
        src="/hero-preview.png"
        alt="Product preview"
        className="relative z-10 aspect-[16/10] w-full rounded-2xl object-cover"
        draggable="false"
      />
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-x-6 -bottom-6 h-12 rounded-full bg-gradient-to-r from-indigo-500/20 via-transparent to-cyan-500/20 blur-xl" />
    </div>
  );
}
