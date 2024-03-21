"use client";
import React from "react";
import MainDecoration from "./components/MainDecoration";
import MainTitle from "./components/MainTitle";
import TechnologyDecoration from "./components/TechnologyDecoration";

const WelcomeSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-5  h-unit-9xl mb-44 ">
      <div className="lg:my-28  relative lg:grid lg:grid-cols-1 align-middle justify-start w-max  motion-safe:animate-appearance-in lg:pr-20">
        <MainTitle />
        <MainDecoration />
      </div>
      <TechnologyDecoration />
    </section>
  );
};

export default WelcomeSection;
