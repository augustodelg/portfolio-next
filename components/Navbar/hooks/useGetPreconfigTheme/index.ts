export const useGetPreconfigTheme = () => {
  let theme = "dark";
  if (typeof window !== "undefined") {
    theme = window.localStorage.getItem("theme") || "dark";
  }
  return theme;
};
