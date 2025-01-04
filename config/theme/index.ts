import { ConfigTheme, ConfigThemes } from "@nextui-org/theme";

const theme: ConfigThemes = {
  light: {
    layout: {
      boxShadow: {
        small: "0 0 0.5rem rgba(175, 120, 120,  0.2)",
        medium: "0 0 1rem rgba(175, 120, 120,  0.2)",
        large: "0 0 2rem rgba(175, 120, 120,  0.2)",
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
      background: {
        DEFAULT: "#FFFFFF",
      },

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
      content1: "#fff7ed",
    },
  },
  dark: {
    layout: {
      boxShadow: {
        small: "0 0 0.5rem rgba(60, 0, 210, 0.12)",
        medium: "0 0 1rem rgba(60, 0, 210, 0.12)",
        large: "0 0 2rem rgba(60, 0, 210, 0.12)",
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
      background: {
        DEFAULT: "#0f172a",
      },
      primary: "#818CF8", // Lighter shade of blue for better visibility in dark mode
      secondary: "#F472B6", // Lighter shade of pink
      divider: "#1F2937",
      // content1: "#111D2D",
      // content1: "#111827",
      content1: "#1e293b",
    },
  },
};

export default theme;
