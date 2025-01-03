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

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(false);
  };

  return (
    <NextUINavbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="z-10"
    >
      <NavbarContent className="hidden sm:block"></NavbarContent>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidde text-indigo-950 dark:text-slate-200"
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex flex-row gap-0" justify="center">
        <NavbarItems />
      </NavbarContent>
      <NavbarMenu>
        <NavbarContent justify="center">
          <div className=" flex flex-col align-middle  justify-center">
            <div className="mb-44">
              <NavbarItems onClick={toggle} />
            </div>
          </div>
        </NavbarContent>
      </NavbarMenu>
      <NavbarContent className="pl-10" justify="end">
        <NavbarItem>
          <ThemeSiwtch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
