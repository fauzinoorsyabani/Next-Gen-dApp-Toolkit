"use client";

import React from "react";

const Footer3 = () => {
  const footerLinks = {
    pagedone: [
      { name: "Home", href: "#" },
      { name: "About", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Features", href: "#" },
    ],
    products: [
      { name: "Figma UI System", href: "#" },
      { name: "Icons Assets", href: "#" },
      { name: "Responsive Blocks", href: "#" },
      { name: "Components Library", href: "#" },
    ],
    resources: [
      { name: "FAQs", href: "#" },
      { name: "Quick Start", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "User Guide", href: "#" },
    ],
    blogs: [
      { name: "News", href: "#" },
      { name: "Tips & Tricks", href: "#" },
      { name: "New Updates", href: "#" },
      { name: "Events", href: "#" },
    ],
  };

  const socialLinks = [
    {
      label: "Twitter",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white" aria-hidden>
          <path d="M16.5 5.5c-.4.2-.8.4-1.3.5.5-.3.8-.8 1-.1-.5.3-1 .6-1.6.8-.5.3-1.1.5-1.7.5-1.3 0-2.4-1-2.4-2.4 0-.2 0-.5.1-.7C9.1 6 7.2 7 6 8.6c-.2.4-.3.9-.3 1.5C5.6 11 7 12 8.7 12.1 8.2 12.4 7.6 12.6 7 12.6c-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.1 1.8-4.9 1.8-.3 0-.6 0-.9-.1 1.8 1.1 3.9 1.8 6.2 1.8 7.4 0 11.5-6.1 11.5-11.5v-.5c.8-.6 1.5-1.3 2-2.2-.8.4-1.8.7-2.7.7.9-.6 1.6-1.5 2-2.6z" fill="currentColor"/>
        </svg>
      ),
      href: "#",
    },
    {
      label: "Instagram",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M4.71 7.94a2.23 2.23 0 112.35 2.35 2.24 2.24 0 01-2.35-2.35z" fill="currentColor"/>
          <path d="M1.28 7.94C1.28 5.97 3.06 4.37 5.06 4.37s3.78 1.6 3.78 3.57-1.78 3.56-3.78 3.56S1.28 9.92 1.28 7.94z" fill="currentColor" opacity="0.6"/>
        </svg>
      ),
      href: "#",
    },
    {
      label: "LinkedIn",
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M2.88 11.55V3.87H0.32v7.68h2.56zM4.30 11.55H6.86V7.26c0-.23.02-.45.09-.61.19-.49.60-.97 1.31-.97.93 0 1.3.71 1.3 1.75v4.09H12.11V7.15c0-2.36-1.26-3.45-2.95-3.45-1.38 0-1.98.77-2.34 1.29V3.87H4.30v7.68z" fill="currentColor"/>
        </svg>
      ),
      href: "#",
    },
    {
      label: "YouTube",
      icon: (
        <svg className="w-5 h-3 text-white" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M13.93 1.13c.63.17 1.13.66 1.3 1.3.31 1.15.31 3.54.31 3.54s0 2.4-.31 3.55c-.17.63-.66 1.13-1.3 1.3-1.15.31-5.75.31-5.75.31S3.59 11.15 2.45 10.84c-.63-.17-1.13-.66-1.3-1.3C.84 8.39.84 5.99.84 5.99s0-2.4.31-3.55C1.32.81 1.82.32 2.45.14 3.59-.15 8.19-.15 9.34.15c.63.17 1.13.66 1.3 1.3zM10.54 5.99L6.72 8.2V3.78l3.82 2.21z" fill="currentColor"/>
        </svg>
      ),
      href: "#",
    },
  ];

  return (
    <footer className="w-full bg-white dark:bg-black text-gray-700 dark:text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 py-12">
          <div className="col-span-full lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-3">
              {/* Logo */}
              <svg width="140" height="36" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <defs>
                  <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
                <g>
                  <path d="M20 0C8.95 0 0 8.95 0 20s8.95 20 20 20 20-8.95 20-20S31.05 0 20 0zm0 35c-8.28 0-15-6.72-15-15S11.72 5 20 5v30z" fill="url(#logoGradient)"/>
                </g>
                <text x="50" y="26" fontFamily="Inter, ui-sans-serif, system-ui" fontSize="20" fontWeight="700" fill="currentColor" className="dark:fill-white">DemoLogo</text>
              </svg>
            </a>

            <p className="mt-6 max-w-xs text-sm text-gray-600 dark:text-gray-400">
              Trusted in more than 100 countries & 5 million customers. Have any query?
            </p>

            <a href="#" className="inline-block mt-5 rounded-full bg-indigo-600 text-white py-2 px-4 text-sm shadow hover:bg-indigo-700 transition">
              Contact us
            </a>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="text-left">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4 capitalize">{title}</h4>
              <ul className="text-sm space-y-3">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between flex-col lg:flex-row gap-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              © <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">pagedone</a> 2024, All rights reserved.
            </span>

            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
