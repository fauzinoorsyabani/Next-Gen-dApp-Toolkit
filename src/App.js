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
import Footer3 from "./components/layout/Footer3";
import FloatingParticle from "./components/nextbunny/cta/FloatingParticle";
import StatCard from "./components/nextbunny/StatCard";
import Waitlist from "./components/nextbunny/waitlist";
import CTAWithVortex from "./components/sections/CTAWithVortex";

export default function App(){
return (
<BackgroundPattern>
    <Navbar />
    <Hero />
    <Partners/>
    <Features />
    <HowItWorks/>
    <Pricing/>
    <CTAWithVortex/>
    <Footer3 />
</BackgroundPattern>
);
}