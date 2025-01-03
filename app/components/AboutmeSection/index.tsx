"use client";

import { Card, CardBody } from "@nextui-org/card";
import React from "react";

import Typography from "@/components/Typography";
import { FontVariant } from "@/components/Typography/types";


const AboutmeSection: React.FC = () => {
  return (
    <section
      id="about-me"
      className="px-10 lg:px-0 relative flex flex-col justify-center items-center  min-h-[900px] w-full animate-appearance-in"
    >
      <div className="flex flex-col">
        <div className="relative overflow-hidden border-transparent w-full grid grid-cols-6 gap-4 ">
          <div className="col-span-3 bg-content1 rounded-es-full flex justify-end overflow-hidden">
            {/* <Image
              src={"/images/avatar-3d.png"}
              width={750}
              height={1050}
              quality={100}
              resource="image"
              className="hidden lg:block z-100 scale-x-[-1.1] scale-y-[1.1]  transition-all absolute -bottom-72 left-72"
              alt={"Foto 3d de augusto"}
            /> */}
          </div>
          <div className="col-span-6 lg:col-span-2 flex flex-col  gap-4 my-auto h-full justify-between">
            <Typography.H1
              variant={FontVariant.BOLD}
              className="text-5xl xl:text-6xl text-indigo-950"
            >
              I&apos;m a Software Engineer working remotely from Argentina 🇦🇷
            </Typography.H1>
            <Typography.Body className="text-base lg:text-xl xl:text-xl text-gray-800">
              Lover of <strong>software architecture</strong>,{" "}
              <strong>DevOps</strong>, <strong>AI</strong> and, clear, reusable and efficient, code.
              If I have to define myself in short, I would say that I consider
              myself a{" "}
              <strong>
                curious person who likes to test, create and understand how
                things work
              </strong>
              . Graduated as a <strong>Analista Programador Universitario</strong>{" "}
              and <strong>5th year student of Computer Science</strong> at{" "}
              <strong>
                Universidad Nacional de La Plata (UNLP, Argentina)
              </strong>
              .
              <br />
            </Typography.Body>
            <Card shadow="sm" radius="lg" className="lg:w-fit">
              <CardBody className="flex flex-row px-0 lg:flex-row lg:px-4 justify-center">
                <Typography.Body className="text-center self-center text-sm lg:text-lg text-gray-900">
                  I love what I do, that&apos;s the
                </Typography.Body>
                <Typography.Body
                  variant={FontVariant.BOLD}
                  className="text-center lg:text-lg text-gray-900 pl-1"
                >
                  trick. 👌
                </Typography.Body>
              </CardBody>
            </Card>
          </div>
          <div className="bg-content1 col-span-1" />
        </div>
      </div>
    </section>
  );
};

export default AboutmeSection;
