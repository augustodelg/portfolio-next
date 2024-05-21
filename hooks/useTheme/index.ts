import { useTheme as NextUseTheme } from "next-themes";

export const useTheme = () => {
  const { theme: _, ...rest } = NextUseTheme();
  let theme = "dark";
  if (typeof window !== "undefined") {
    theme = window.localStorage.getItem("theme") || "dark";
  }
  return { theme, ...rest };
};
