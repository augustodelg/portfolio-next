import { NextFont } from "next/dist/compiled/@next/font";
import { CSSProperties, useMemo } from "react";
import { FontVariant } from "../types";

export const useFontVariant = (
  font: NextFont,
  variant: FontVariant
): string => {
  const style = useMemo(() => {
    let fontWeight;

    switch (variant) {
      case FontVariant.REGULAR:
        fontWeight = "font-normal";
        break;
      case FontVariant.MEDIUM:
        fontWeight = "font-medium";
        break;
      case FontVariant.BOLD:
        fontWeight = "font-bold";
        break;
      default:
        fontWeight = "font-normal";
        break;
    }

    // Retorna un objeto de estilo CSS.
    return `${font.className} ${fontWeight}`;
  }, [font.className, variant]);

  return style;
};
