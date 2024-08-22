import Navbar from "@/components/navbar/navbar";
import HeroSection from "./hero-section";
import Section from "./section";
import React from "react";
const LandingPage = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Section />
    </div>
  );
};

export default LandingPage;
