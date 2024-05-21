import { siteConfig } from "@/config/site";
import { isDarkMode } from "@/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Socialmedia: React.FC = () => {
  const { theme } = useTheme();
  const isDark = isDarkMode(theme);
  const iconStyle = isDark ? "invert(1)" : "none";
  return (
    <div className="flex gap-4  w-max mx-auto lg:mx-0 lg:pl-1 mt-2">
      <Link href={siteConfig.links.github} target="_blank">
        <Image
          src={"/icons/Github.svg"}
          width={40}
          height={40}
          alt={"Github"}
          style={{ filter: iconStyle }}
          className="hover:scale-[1.2] transition-all duration-200"
        />
      </Link>
      <Link href={siteConfig.links.linkedin} target="_blank">
        <Image
          src={"/icons/Linkedin.svg"}
          width={40}
          height={40}
          alt={"Linkedin"}
          style={{ filter: iconStyle }}
          className="hover:scale-[1.2] transition-all duration-200"
        />
      </Link>
    </div>
  );
};

export default Socialmedia;
