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
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(false);
  };

  return (
    <NextUINavbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      shouldHideOnScroll
      className="z-10"
    >
      <NavbarContent className="hidden sm:block"></NavbarContent>
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidde text-indigo-950"
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
            <div className="absolute left-0 right-0  bottom-10 mx-auto flex flex-col align-middle justify-center text-center">
              <Button variant="light" size="lg" className="text-gray-500">
                Version 0.0.1
              </Button>
              <Typography.Body className="text-small text-gray-500">
                Designed and developed by Taca 👨‍💻
              </Typography.Body>
            </div>
          </div>
        </NavbarContent>
      </NavbarMenu>
      <NavbarContent className="pl-10" justify="end">
        <NavbarItem>
          <Switch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
