import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import HowItWorks from "./components/sections/HowItWorks";
import Pricing from "./components/sections/Pricing";
import CTA from "./components/sections/CTA";
import "./App.css";
import BackgroundPattern from "./components/layout/BackgrounPatter"
import Marquee from "./components/ui/Marquee";
import Partners from "./components/sections/Partners";
import SimplePricing from "./components/sections/SimplePricing";


export default function App(){
return (
<BackgroundPattern>
    <Navbar />
    <Hero />
    <Partners/>
    <Features />
    <HowItWorks/>
    <Pricing/>
    <CTA />
    <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">© {new Date().getFullYear()} Web3Landing. All rights reserved.</footer>
</BackgroundPattern>
);
}