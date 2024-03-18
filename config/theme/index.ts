import { ConfigTheme, ConfigThemes } from "@nextui-org/theme";

const theme: ConfigThemes = {
  light: {
    layout: {
      fontSize: {
        small: "0.75rem",
        medium: "0.875rem",
        large: "1rem",
        tiny: "0.5rem",
      },
      lineHeight: {
        small: "1rem",
        medium: "1.25rem",
        large: "2rem",
      },
      radius: {
        small: "0.25rem",
        medium: "0.5rem",
        large: "1rem",
      },
      disabledOpacity: 0.5,
      hoverOpacity: 0.8,
      dividerWeight: "1px",

    },
    colors: {
      primary: "#6366F1",
      secondary: "#EC4899",
      foreground: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
        DEFAULT: "#FFFF",

      },
      divider: "#fff",
      content1: "#fff",
    },
  },
};

export default theme;
