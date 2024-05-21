import { UseThemeProps } from "next-themes/dist/types";

export const isDarkMode = (theme: UseThemeProps["theme"]) => {
  return theme === "dark";
};

export const isLightMode = (theme: UseThemeProps["theme"]) => {
  return theme === "light";
};