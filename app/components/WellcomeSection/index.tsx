"use client";
import React from "react";
import MainDecoration from "./components/MainDecoration";
import MainTitle from "./components/MainTitle";
import TechnologyDecoration from "./components/TechnologyDecoration";

const AnimatedBackground = () => {
  return (
    <>
      <div className="absolute top-0 right-28 w-72 h-72 bg-orange-200 dark:bg-indigo-400 rounded-full  filter opacity-30 dark:opacity-10 blur-3xl animate-blob"></div>
      <div className="absolute top-0 right-0 w-32 h-32  bg-pink-600 dark:bg-indigo-500 rounded-full  filter opacity-30 dark:opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-0 left-0 w-72 h-72 lg:w-96 lg:h-96 bg-indigo-400 dark:bg-indigo-600  rounded-full  filter  opacity-30 dark:opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
      <div className="hidden lg:absolute top-0 left-40 w-72 h-72 bg-orange-500 dark:bg-indigo-900 rounded-full  filter opacity-30 dark:opacity-20 blur-3xl animate-blob animation-delay-6000"></div>
      <div className="hidden lg:absolute top-0 -left-40 w-72 h-72 dark:bg-indigo-700 rounded-full  filter opacity-10 blur-3xl animate-blob"></div>
      <div className="hidden lg:absolute top-0 left-64 w-44 h-44  dark:bg-purple-500 rounded-full  filter opacity-10 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 -left-64 w-72 h-72 dark:bg-indigo-800  rounded-full  filter opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
      <div className="absolute -top-20 -left-64 w-96 h-96 dark:bg-indigo-600  rounded-full  filter opacity-10 blur-3xl "></div>
    </>
  );
};

const WelcomeSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 lg:pt-16 h-[calc(100vh-4rem)] min-h-[900px]">
      <AnimatedBackground/>
      <div className="lg:mt-[15dvh] mx-auto self-center relative lg:grid lg:grid-cols-1 align-middle justify-start xl:min-w-[750px] motion-safe:animate-appearance-in lg:pr-20">
        <MainTitle />
        <MainDecoration />
      </div>
      <TechnologyDecoration />
    </section>
  );
};

export default WelcomeSection;
