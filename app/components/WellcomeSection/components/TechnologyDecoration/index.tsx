'use client'
import React from "react";
import TechnologyCard from "./components/TechnologyCard";
import { technologies } from "./const";

const TechnologyDecoration: React.FC = () => {
  return (
    <>
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.name}
          alt={technology.alt}
          configuration={technology.configuration}
          height={technology.height}
          width={technology.width}
          src={technology.src}
        />
      ))}
    </>
  );
};

export default TechnologyDecoration;
