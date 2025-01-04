"use client";
import Typography from "@/components/Typography";
import { FontVariant } from "@/components/Typography/types";
import React from "react";
import { TimeSummary } from "./components/TimeSummary";
import { experienceData } from "./const";

const AnimatedBackground = () => {
  return (
    <>
      <div className="absolute top-0 right-40 w-72 h-72 bg-orange-200 dark:bg-indigo-300 rounded-full mix-blend-multiply filter opacity-70 dark:opacity-10 blur-3xl animate-blob"></div>
      <div className="absolute top-0 right-20 w-72 h-72  bg-indigo-600 dark:bg-indigo-500 rounded-full mix-blend-multiply filter opacity-30 dark:opacity-10 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 right-20 w-72 h-72 bg-indigo-400 dark:bg-indigo-100  rounded-full mix-blend-multiply filter  opacity-30 dark:opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
      <div className="absolute -bottom-8 right-40 w-72 h-72 bg-orange-500 dark:bg-indigo-400 rounded-full mix-blend-multiply filter opacity-30 dark:opacity-10 blur-3xl animate-blob animation-delay-6000"></div>
      <div className="absolute -bottom-8 left-10 w-72 h-72 bg-indigo-300/70 dark:bg-indigo-300 rounded-full mix-blend-multiply filter opacity-10 blur-3xl animate-blob"></div>
      <div className="absolute -bottom-8 left-12 w-40 h-40 lg:w-72 lg:h-72 dark:bg-indigo-500 rounded-full mix-blend-multiply filter opacity-10 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-40 h-40 lg:w-72 lg:h-72 bg-orange-500 dark:bg-indigo-100  rounded-full mix-blend-multiply filter opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
    </>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative pt-10 px-4 items-center w-full xl:max-w-7xl animate-appearance-in  overflow-visible "
    >
      <AnimatedBackground />
      <div className="pb-10 lg:pb-20 flex flex-col gap-4 mt-10">
        <Typography.H2
          variant={FontVariant.BOLD}
          className="text-indigo-950 text-5xl lg:text-6xl text-left "
        >
          My experience
        </Typography.H2>
        <Typography.Body
          className="text-gray-800 dark:text-gray-300 text-base lg:text-2xl text-left"
          variant={FontVariant.REGULAR}
        >
          I always strive to give my best in every <strong>project</strong>,{" "}
          <strong>company</strong>, <strong>client</strong> I work with.
        </Typography.Body>
      </div>
      <div className="grid grid-rows-4 gap-4 ">
        <div className="self-center col-span-12 lg:row-start-1 lg:row-end-1 lg:col-start-8 lg:col-end-11 bg-slate-800 hover:bg-slate-700 transition-all duration-300 p-8 rounded-full flex justify-between align-middle drop-shadow-2xl">
          <div>
            <Typography.H2 variant={FontVariant.BOLD} className="text-lg">
              {experienceData[1].subtitle}
            </Typography.H2>
            <Typography.Body className="text-sm">{experienceData[1].title}</Typography.Body>
          </div>
          <Typography.Body
            variant={FontVariant.BOLD}
            className="text-xs self-center text-right w-32"
          >
            {experienceData[1].date}
          </Typography.Body>
        </div>
        <div className="self-center col-span-12 lg:row-start-2 lg:row-end-2 lg:col-start-6 lg:col-end-13 bg-slate-800 hover:bg-slate-700 transition-all duration-300 p-8 rounded-full flex justify-between align-middle drop-shadow-2xl">
          <div>
            <Typography.H2 variant={FontVariant.BOLD} className="text-lg">
              {experienceData[0].subtitle}
            </Typography.H2>
            <Typography.Body className="text-sm">
              Technical Lead - FullStack - Cloud Developer
            </Typography.Body>
          </div>
          <Typography.Body
            variant={FontVariant.BOLD}
            className="text-xs self-center text-right w-32"
          >
            {experienceData[0].date}
          </Typography.Body>
        </div>

        <div className="self-center col-span-12 lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-6 bg-slate-800 hover:bg-slate-700 transition-all duration-300 p-8 rounded-full flex justify-between align-middle drop-shadow-2xl">
          <div>
            <Typography.H2 variant={FontVariant.BOLD} className="text-lg">
              {experienceData[2].subtitle}
            </Typography.H2>
            <Typography.Body className="text-sm">{experienceData[2].title}</Typography.Body>
          </div>
          <Typography.Body
            variant={FontVariant.BOLD}
            className="text-xs self-center text-right w-32"
          >
            {experienceData[2].date}
          </Typography.Body>
        </div>
        <div className="self-center row-start-4 row-end-5 col-start-1 col-end-13 bg-slate-800 hover:bg-slate-700 transition-all duration-300 p-8 rounded-full flex justify-between align-middle drop-shadow-2xl">
          <div>
            <Typography.H2 variant={FontVariant.BOLD} className="text-lg">
              {experienceData[3].subtitle}
            </Typography.H2>
            <Typography.Body className="text-sm">{experienceData[3].title}</Typography.Body>
          </div>
          <Typography.Body
            variant={FontVariant.BOLD}
            className="text-xs self-center text-right w-48"
          >
            {experienceData[3].date}
          </Typography.Body>
        </div>
      </div>
      <TimeSummary />
    </section>
  );
};

export default ExperienceSection;
