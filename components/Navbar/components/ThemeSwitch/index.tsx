"use client"

import { useTheme } from "@/hooks/useTheme";
import { isDarkMode } from "@/utils";
import { Switch } from "@nextui-org/switch";
import Icons from "@/components/Icons";
import React from "react";

const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();
  const isDark = isDarkMode(theme);

  const darkModeHandler = () => {
    setTheme(isDark ? "light" : "dark");
  };
  return (
      <Switch
        isSelected={isDark}
        onChange={() => darkModeHandler()}
        color="default"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? <Icons.Moon className={`${className} text-indigo-900`} /> :<Icons.Sun className={`${className} text-yellow-500`} />
        }
      />
  );
};

export default ThemeSwitch;
