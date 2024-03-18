"use client";

import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { Switch } from "@nextui-org/switch";
import Typography from "@/components/Typography";
import { FontVariant } from "@/components/Typography/types";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <NextUINavbar
      onMenuOpenChange={setIsMenuOpen}
      position="sticky"
      className="z-10"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#home">
            <Typography.Body
              className="text-indigo-950"
              variant={FontVariant.BOLD}
            >
              INICIO
            </Typography.Body>
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="#about-me">
            <Typography.Body
              className="text-indigo-950"
              variant={FontVariant.BOLD}
            >
              SOBRE MI
            </Typography.Body>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#experiense">
            <Typography.Body
              className="text-indigo-950"
              variant={FontVariant.BOLD}
            >
              EXPERIENCIAS
            </Typography.Body>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <Typography.Body
              className="text-indigo-950"
              variant={FontVariant.BOLD}
            >
              ESTUDIOS
            </Typography.Body>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <Typography.Body
              className="text-indigo-950"
              variant={FontVariant.BOLD}
            >
              PROYECTOS
            </Typography.Body>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <Typography.Body
              className="text-indigo-950"
              variant={FontVariant.BOLD}
            >
              CONOCIMIENTOS
            </Typography.Body>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="pl-10">
        <NavbarItem>
          <Switch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
