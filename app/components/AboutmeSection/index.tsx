import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

import Typography from "@/components/Typography";
import { FontVariant } from "@/components/Typography/types";
import Image from "next/image";

const AboutmeSection: React.FC = () => {
  return (
    <section id="about-me" className="relative flex flex-col gap-4 justify-center items-center h-screen w-full xl:w-8/12 animate-appearance-in">
      <Card
        shadow="lg"
        radius="lg"
        className="mt-16 px-16 py-16 relative overflow-visible  border-transparent w-screen md:w-full "
      >
        <Image
          className="hidden md:block absolute -top-48 -right-24 z-100"
          src={"/images/avatar-3d.png"}
          width={550}
          height={450}
          quality={100}
          alt={"Foto de augusto"}
        />

        <CardHeader>
          <Typography.H1
            variant={FontVariant.BOLD}
            className="text-6xl text-purple-950"
          >
            ABOUT ME
          </Typography.H1>
        </CardHeader>
        <CardBody>
          <Typography.Body className="text-lg text-gray-700 md:pr-80">
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
        className="hidden md:block  md:absolute -right-16 md:bottom-10  xl:bottom-40  -z-10"
        src={"/images/points.svg"}
        width={350}
        height={350}
        quality={100}
        alt={"decorative points"}
      />
      <div className="flex gap-4 align-middle justify-end w-full">
        <Card shadow="md" radius="lg">
          <CardBody className="flex flex-row">
            <Typography.Body className="text-center  text-md text-gray-900">
              Knowing and understanding how things works is the
            </Typography.Body>
            <Typography.Body
              variant={FontVariant.BOLD}
              className="text-center text-md text-gray-900 pl-1"
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
