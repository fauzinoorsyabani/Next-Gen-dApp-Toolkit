import React from "react";
import Marquee from "../ui/Marquee";

const logos = [
  { src: "/logos/ethereum.svg", alt: "Ethereum" },
  { src: "/logos/avalanche-avax-logo.svg", alt: "Avalanche" },
  { src: "/logos/solana.svg", alt: "Solana" },
  { src: "/logos/cardano-ada-logo.svg", alt: "Cardano" },
  { src: "/logos/shiba-inu-shib-logo.svg", alt: "Shiba" },
  { src: "/logos/tether-usdt-logo.svg", alt: "Tether" },
  { src: "/logos/tron-trx-logo.svg", alt: "Tron" },
  { src: "/logos/usd-coin-usdc-logo.svg", alt: "USDC" },
  { src: "/logos/bnb-bnb-logo.svg", alt: "BNB" },
  { src: "/logos/xrp-xrp-logo.svg", alt: "XRP" },
];

function LogoCard({ src, alt }) {
  return (
    <div className="flex min-w-[7rem] h-16 w-auto items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm p-3 transition hover:scale-[1.04] hover:border-indigo-500/20">
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-8 w-auto opacity-80 transition hover:opacity-100"
        />
      ) : (
        <span className="text-sm text-slate-300">{alt}</span>
      )}
    </div>
  );
}

export default function Partners() {
  return (
    <section
      id="partners"
      className="relative mx-auto max-w-6xl px-4 py-20 text-center"
    >
      {/* --- Background glow --- */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 h-[240px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      {/* --- Header section --- */}
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-indigo-400">
          Trusted by
        </p>
        <h3 className="mt-2 text-3xl md:text-4xl font-bold text-white">
          Partners & Integrations
        </h3>
        <p className="mt-3 text-slate-400">
          Berkolaborasi dengan ekosistem wallet, chain, dan infrastruktur
          terkemuka di dunia Web3.
        </p>
      </div>

      {/* --- Marquee rows --- */}
      <div className="mt-10">
        <Marquee className="[--gap:2rem]" speed={70}>
          {logos.map((l) => (
            <LogoCard key={`a-${l.alt}`} {...l} />
          ))}
        </Marquee>

        <Marquee className="mt-6 [--gap:2rem]" speed={60} reverse>
          {logos
            .slice()
            .reverse()
            .map((l) => (
              <LogoCard key={`b-${l.alt}`} {...l} />
            ))}
        </Marquee>
      </div>
    </section>
  );
}
