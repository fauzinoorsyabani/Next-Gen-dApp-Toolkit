import React from "react";
import { cn } from "../../lib/utils";

/* ICONS */
const ArrowRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M8.22 2.72a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L11.94 8.5H3.75a.75.75 0 0 1 0-1.5h8.19L8.22 3.78a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
  </svg>
);

const FileTextIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
       viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>
);

const IntegrationIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
       viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
);

const ShareIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
       viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
    <polyline points="16 6 12 2 8 6"/>
    <line x1="12" y1="2" x2="12" y2="15"/>
  </svg>
);

const GlobeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
       viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
    <path d="M2 12h20"/>
  </svg>
);

/* GRID & CARD */
const BentoGrid = ({ children, className, ...props }) => (
  <div
    className={cn(
      "grid w-full auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const BentoCard = ({ name, className, background, Icon, description, href, cta, ...props }) => (
  <div
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-transparent [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0),0_12px_24px_rgba(0,0,0,.05)]",
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props}
  >
    <div>{background}</div>

    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      {Icon && (
        <Icon className="mb-2 h-12 w-12 origin-left transform-gpu text-white transition-all duration-300 ease-in-out group-hover:scale-75 dark:text-neutral-300" />
      )}
      <h3 className="text-xl font-semibold text-neutral-100 dark:text-neutral-100">{name}</h3>
      <p className="max-w-lg text-neutral-200 dark:text-neutral-400">{description}</p>
    </div>

    {href && (
      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <a
          href={href}
          className="pointer-events-auto flex items-center text-sm font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
        >
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </div>
    )}

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

/* DATA — rename to avoid clash */
const bentoItems = [
  {
    Icon: FileTextIcon,
    name: "Automated Reporting",
    description: "Generate and export detailed reports with a single click.",
    href: "#",
    cta: "Learn More",
    className: "lg:col-span-1",
    background: <div className="absolute inset-0 bg-indigo-200/50 dark:bg-amber-950/20" />,
  },
  {
    Icon: IntegrationIcon,
    name: "Seamless Integration",
    description: "Connect with your favorite tools and services effortlessly.",
    href: "#",
    cta: "View Integrations",
    className: "lg:col-span-2",
    background: <div className="absolute inset-0 bg-indigo-500/50 dark:bg-purple-950/20" />,
  },
  {
    Icon: ShareIcon,
    name: "Real-Time Collaboration",
    description: "Work together with your team in real-time on any project.",
    href: "#",
    cta: "Try It Now",
    className: "lg:col-span-2",
    background: <div className="absolute inset-0 bg-indigo-800/50 dark:bg-blue-950/20" />,
  },
  {
    Icon: GlobeIcon,
    name: "Global Reach",
    description: "Deploy your applications anywhere with our robust infrastructure.",
    href: "#",
    cta: "Explore Regions",
    className: "lg:col-span-1",
    background: <div className="absolute inset-0 bg-indigo-900/50 dark:bg-green-950/20" />,
  },
];

/* SECTION */
export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Features</h2>
        <p className="mt-2 text-slate-300">
          Everything you need to ship a modern web3 landing quickly.
        </p>
      </div>

      <BentoGrid>
        {bentoItems.map((f, i) => (
          <BentoCard key={i} {...f} />
        ))}
      </BentoGrid>
    </section>
  );
}
