"use client"

import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

import Typography from "@/components/Typography";
import { FontVariant } from "@/components/Typography/types";
import Image from "next/image";
import { isDarkMode } from "@/utils";
import { useTheme } from "next-themes";

const AboutmeSection: React.FC = () => {
  const { theme } = useTheme();

  const isDark = isDarkMode(theme);
  const iconStyle = isDark ? "invert(1)" : "none";
  return (
    <section
      id="about-me"
      className="relative flex flex-col gap-4 px-3 justify-center items-center h-screen w-full md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-6/12 animate-appearance-in"
    >
      <Card
        shadow="lg"
        radius="lg"
        className="mt-16 py-16 px-10 sm:px-16 relative overflow-visible border-transparent md:w-full"
      >
        <Image
          className="hidden md:block absolute -top-44 -right-24 z-100"
          src={"/images/avatar-3d.png"}
          width={550}
          height={450}
          quality={100}
          alt={"Foto 3d de augusto"}
        />

        <CardHeader>
          <Typography.H1
            variant={FontVariant.BOLD}
            className="text-5xl lg:text-6xl text-purple-950"
          >
            ABOUT ME.
          </Typography.H1>
        </CardHeader>
        <CardBody>
          <Typography.Body className="text-base lg:text-lg text-gray-700 md:pr-80">
            Graduated as a University Programmer Analyst and 5th year student of
            Computer Science at Universidad Nacional de La Plata (UNLP,
            Argentina). Lover of software architecture, DevOps and, clear,
            reusable and efficient, code. If I have to define myself in short, I
            would say that I consider myself a curious person who likes to test,
            create and understand how things work.
          </Typography.Body>
        </CardBody>
      </Card>
      <Image
        className=" absolute lg:-right-16 bottom-14 md:bottom-10 xl:bottom-40 -z-10"
        src={"/images/points.svg"}
        width={350}
        height={350}
        quality={100}
        style={{  filter: iconStyle , opacity: 0.5}}
        alt={"decorative points"}
      />
      <div className="flex align-middle justify-center md:justify-end md:w-full w-full">
        <Card shadow="sm" radius="lg" className="w-full md:w-auto">
          <CardBody className="flex flex-col px-0 lg:flex-row md:w-auto md:px-4 w-full ">
            <Typography.Body className="text-center text-sm md:text-md text-gray-900">
              Knowing and understanding how things works is the
            </Typography.Body>
            <Typography.Body
              variant={FontVariant.BOLD}
              className="text-center md:text-md text-gray-900 pl-1"
            >
              key. 👌
            </Typography.Body>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default AboutmeSection;
