"use client";

import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import DemoSection from "@/components/sections/DemoSection";
import RecipeSection from "@/components/sections/RecipeSection";
import CTASection from "@/components/sections/CTASection";
import FooterSection from "@/components/sections/FooterSection";
import AnimatedHero from "@/components/sections/AnimatedHero";
import LightRays from "@/components/LightRay";
import MagicBento from "@/components/MagicBento";

// Main Landing Page Component
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatedHero />
      {/* <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
      /> */}
      {/* <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <RecipeSection />
      <CTASection />
      <FooterSection /> */}
    </div>
  );
}
