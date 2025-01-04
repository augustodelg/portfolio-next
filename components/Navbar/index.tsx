"use client";

import {
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { Switch } from "@nextui-org/switch";
import { Suspense, useEffect, useState } from "react";
import { NavbarItems } from "./components/NavbarItems";
import { useTheme } from "@/hooks/useTheme";
import { isDarkMode } from "@/utils";
import { useGetPreconfigTheme } from "./hooks/useGetPreconfigTheme";
import ThemeSiwtch from "./components/ThemeSwitch";

// export const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggle = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <NextUINavbar
//       onMenuOpenChange={setIsMenuOpen}
//       isMenuOpen={isMenuOpen}
//       className="z-10"
//     >
//       <NavbarContent className="hidden sm:block"></NavbarContent>
//       <NavbarContent className="sm:hidden" justify="start">
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="sm:hidde text-indigo-950 dark:text-slate-200"
//         />
//       </NavbarContent>
//       <NavbarContent className="hidden sm:flex flex-row gap-0" justify="center">
//         <NavbarItems />
//       </NavbarContent>
//       <NavbarMenu>
//         <NavbarContent justify="center">
//           <div className=" flex flex-col align-middle  justify-center">
//             <div className="mb-44">
//               <NavbarItems onClick={toggle} />
//             </div>
//           </div>
//         </NavbarContent>
//       </NavbarMenu>
//       <NavbarContent className="pl-10" justify="end">
//         <NavbarItem>
//           <ThemeSiwtch />
//         </NavbarItem>
//       </NavbarContent>
//     </NextUINavbar>
//   );
// };

import Link from "next/link";
import Typography from "../Typography";
import { FontVariant } from "../Typography/types";

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Work");
  const [scrolled, setScrolled] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  const tabs = [
    { name: "Hello", href: "#home" },
    { name: "About", href: "#about-me" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const activeElement = document.querySelector(`.tab-${activeTab}`);
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement as HTMLElement;
      setIndicatorStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeTab]);

  return (
    <div className="fixed top-5 w-full z-50">
      <nav
        className={`max-w-6xl w-fit mx-auto py-2 px-4 flex justify-center items-center rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-content1/70 backdrop-blur-md shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <ul className="relative flex text-gray-400 p-0 m-0">
          <div
            className="absolute h-full transition-all duration-300 ease-in-out bg-gray-100/40 dark:bg-slate-500/40 rounded-full  pointer-events-none"
            style={{
              ...indicatorStyle,
              position: "absolute",
            }}
          ></div>

          {/* Elementos de navegación */}
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              className={`
                mx-auto
                ${
                activeTab === tab.name
                  ? "text-indigo-950"
                  : "text-indigo-950/80"
              }`}
            >
              <li
                className={`relative z-10 px-4 lg:px-6 py-2 cursor-pointer font-medium  tab-${tab.name} `}
                onClick={() => setActiveTab(tab.name)}
              >
                <Typography.Body variant={FontVariant.MEDIUM} className="text-sm lg:text-base text-center" >
                  {tab.name}
                </Typography.Body>
              </li>
            </Link>
          ))}
          <li className="my-auto pl-2 pr-0 lg:pl-4">
            <ThemeSiwtch />
          </li>
        </ul>
      </nav>
    </div>
  );
};
