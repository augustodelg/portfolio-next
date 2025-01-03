"use client";
import React from "react";
import MainDecoration from "./components/MainDecoration";
import MainTitle from "./components/MainTitle";
import TechnologyDecoration from "./components/TechnologyDecoration";

const WelcomeSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-5 h-[calc(100vh-4rem)] min-h-[900px]">
      <div className="lg:mt-[15dvh] mx-auto self-center relative lg:grid lg:grid-cols-1 align-middle justify-start xl:min-w-[750px] motion-safe:animate-appearance-in lg:pr-20">
        <MainTitle />
        <MainDecoration />
      </div>
      <TechnologyDecoration />
    </section>
  );
};

export default WelcomeSection;
