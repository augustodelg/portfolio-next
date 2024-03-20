"use client";
import ChangingComponent from "@/components/ChangingComponent";
import Typography from "@/components/Typography";
import { FontVariant } from "@/components/Typography/types";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { Image as NextUIImage } from "@nextui-org/image";
import React from "react";
import TechnologyDecoration from "./components/TechnologyDecoration";
import MainDecoration from "./components/MainDecoration";
import MainTitle from "./components/MainTitle";

const WelcomeSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-5  h-unit-9xl ">
      <div className="lg:my-28  relative lg:grid lg:grid-cols-1 align-middle justify-start w-max  motion-safe:animate-appearance-in lg:pr-20">
        <MainTitle />
        <MainDecoration />
      </div>
      <TechnologyDecoration />
    </section>
  );
};

export default WelcomeSection;
