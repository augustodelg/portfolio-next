import { FontProps } from "@/components/Typography/types";
import { fontSans } from "@/config/fonts";
import { useFontVariant } from "../../hook/useFontVariant";
import { FontVariant } from "../../types";

const Body2 = ({
  children,
  variant = FontVariant.REGULAR,
  className,
  ...rest
}: FontProps): JSX.Element => {
  const fontClassName = useFontVariant(fontSans, variant);

  return (
    <p
      className={` ${className} ${fontClassName}`}
      style={{ letterSpacing: "0.09px" }}
      {...rest}
    >
      {children}
    </p>
  );
};
export default Body2;
