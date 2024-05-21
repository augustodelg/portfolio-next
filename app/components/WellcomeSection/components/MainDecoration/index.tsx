import { isDarkMode } from "@/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const MainDecoration: React.FC = () => {
  const { theme } = useTheme();
  
  const isDark = isDarkMode(theme);

  const colorGlow = isDark
    ? "rgba(60, 0, 210, 0.467)"
    : "rgba(0, 40, 173, 0.25)";

  return (
    <>
      <Image
        className="left-[24%]  top-[112%] w-64 h-64 lg:w-80 lg:h-80 lg:left-[55%] lg:top-[80%] xl:w-96 xl:h-96 block rotate-3 absolute xl:left-[60%] xl:top-40 motion-safe:animate-none z-10 "
        src={"/images/astronaut.webp"}
        width={500}
        height={500}
        quality={100}
        priority
        alt={"Astronaut and clouds"}
      />
      <Image
        className="w-64 h-50 left-12 top-[130%] scale-150 md:left-10 lg:w-[60%] lg:left-52 lg:top-[90%] xl:w-auto xl:h-auto object-contain block absolute xl:scale-110 xl:left-24 xl:top-28 xl:size-10 motion-safe:animate-none -z-10  dark:drop-shadow-3xl"
        style={{
          filter: `drop-shadow(0 0mm 20mm ${colorGlow})`,
        }}
        priority
        src={"/images/space-background.svg"}
        width={1200}
        height={450}
        quality={100}
        alt={"Space"}
      />
    </>
  );
};

export default MainDecoration;
