import { FontProps } from "@/components/Typography/types";
import { fontSans } from "@/config/fonts";
import { useFontVariant } from "../../hook/useFontVariant";
import { FontVariant } from "../../types";

const Body1 = ({
  children,
  variant = FontVariant.REGULAR,
  className,
  ...rest
}: FontProps): JSX.Element => {
  const fontClassName = useFontVariant(fontSans, variant);

  return (
    <p
      className={`${className} ${fontClassName} dark:text-slate-200`}
      style={{ letterSpacing: "0.09px" }}
      {...rest}
    >
      {children}
    </p>
  );
};
export default Body1;
