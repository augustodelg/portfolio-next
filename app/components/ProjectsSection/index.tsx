"use client";

import React from "react";
import Image from "next/image";
import Typography from "@/components/Typography";
import { FontVariant } from "@/components/Typography/types";

const ProjectsSection = () => {
  const projects = [
    {
      brand: "OWN SOFTWARE",
      title: "Ticket System",
      bgColor: "bg-indigo-300",
      image: "/images/tacket.png",
    },
    {
      brand: "CLIENT SOFTWARE",
      title: "Plasticoin",
      bgColor: "bg-teal-200",
      image: "/images/plasticoin.png",
    },
    {
      brand: "OWN SOFTWARE",
      title: "Item trading platform",
      bgColor: "bg-violet-300",
      image: "/images/trading-app.png",
    },
  ];

  return (
    <section id="projects" className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="pb-10 lg:pb-20 flex flex-col gap-4 mt-10 items-end ">
          <Typography.H2
          variant={FontVariant.BOLD}
            className="text-indigo-950 text-5xl lg:text-6xl"
          >
            Some of my projects
          </Typography.H2>
          <Typography.Body
            className="text-gray-800 dark:text-gray-300 text-base lg:text-xl text-right lg:w-11/12"
            variant={FontVariant.REGULAR}
          >
            It&apos;s a collection of <strong>ideas</strong> and <strong>challenges</strong> I enjoy exploring. Many of which also come from clients, and only the public-friendly ones make it here!
          </Typography.Body>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative rounded-3xl h-60 overflow-hidden group transition-all duration-300 hover:shadow-orange-200 hover:shadow-2xl dark:hover:shadow-slate-600 hover:translate-y-[-5px] ${project.bgColor}`}
            >
              <div className="absolute inset-0 border-2 border-transparent rounded-3xl transition-colors duration-300 pointer-events-none z-10" />

              <div className="p-6 relative z-20">
                <h3 className="text-sm uppercase tracking-wider text-gray-600">
                  {project.brand}
                </h3>
                <h2 className="text-2xl font-extrabold text-gray-800">
                  {project.title}
                </h2>
              </div>

              <div className="absolute bottom-0 right-0 w-[60%] sm:w-[70%] md:w-[60%] lg:w-[70%] translate-x-1/4 translate-y-1/4 group-hover:translate-y-[3px] transition-transform duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={400}
                  className="rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
