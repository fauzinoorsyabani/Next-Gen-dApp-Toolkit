import React from "react";
import Marquee from "../ui/Marquee";

// Data logo (taruh file SVG/PNG di public/logos)
const logos = [
  { src: "/logos/ethereum.svg", alt: "Ethereum" },
  { src: "/logos/avalanche-avax-logo.svg", alt: "Avalanche" },
  { src: "/logos/solana.svg", alt: "Solana" },
  { src: "/logos/cardano-ada-logo.svg", alt: "Cardano" },
  { src: "/logos/shiba-inu-shib-logo.svg", alt: "Shiba" },
  { src: "/logos/tether-usdt-logo.svg", alt: "Tether" },
  { src: "/logos/tron-trx-logo.svg", alt: "Tron" },
  { src: "/logos/usd-coin-usdc-logo.svg", alt: "Usdc" },
  { src: "/logos/bnb-bnb-logo.svg", alt: "BNS" },
  { src: "/logos/xrp-xrp-logo.svg", alt: "XRP" },
];
function LogoCard({ src, alt }) {
  return (
    <div className="flex min-w-[7rem] h-16 w-auto items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm p-3">
      {src ? (
        <img src={src} alt={alt} className="h-8 w-auto opacity-80 transition hover:opacity-100" />
      ) : (
        <span className="text-sm text-slate-300">{alt}</span>
      )}
    </div>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="relative mx-auto max-w-6xl px-4 py-16">
      {/* ... header ... */}

      {/* marquee 1 - pakai CSS var --gap */}
      <Marquee className="mt-8" speed={70} style={{ ["--gap"]: "2rem" }}>
        {logos.map((l) => <LogoCard key={`a-${l.alt}`} {...l} />)}
      </Marquee>

      <Marquee className="mt-4" speed={60} reverse style={{ ["--gap"]: "2rem" }}>
        {logos.slice().reverse().map((l) => <LogoCard key={`b-${l.alt}`} {...l} />)}
      </Marquee>
    </section>
  );
}