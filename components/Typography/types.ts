import { CSSProperties, HTMLAttributes, type PropsWithChildren } from "react";

export enum FontVariant {
  REGULAR = "regular",
  MEDIUM = "medium",
  BOLD = "bold",
}

export type FontProps = PropsWithChildren<{
  variant?: FontVariant;
  className?: string;
  style?: CSSProperties;
}>;
