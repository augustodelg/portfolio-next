"use client";

import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { Switch } from "@nextui-org/switch";
import Typography from "@/components/Typography";
import { FontVariant } from "@/components/Typography/types";
import { useState } from "react";
import { NavbarItems } from "./components/NavbarItems";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(false);
  }

  return (
    <NextUINavbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      shouldHideOnScroll
      className="z-10"
    >
      <NavbarContent className="hidden sm:block" >

      </NavbarContent>
      <NavbarContent className="sm:hidden" >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidde text-indigo-950"
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex flex-row gap-0" justify="center">
        <NavbarItems />
      </NavbarContent>
      <NavbarMenu>
        <NavbarContent justify="center" className="flex flex-col">
          <NavbarItems onClick={toggle} />
        </NavbarContent>
      </NavbarMenu>
      <NavbarContent className="pl-10" justify="end" >
        <NavbarItem>
          <Switch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};

