import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Features from "./Features";
import TrustSignals from "./TrustSignals";
import FAQ from "./FAQ";
import CTA from "./CTA";
import Navigation from "./Navigation";

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <Hero />
      <Features />
      <TrustSignals />
      <FAQ />
      <CTA />
    </div>
  );
};

export default LandingPage;