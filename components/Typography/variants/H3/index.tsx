import { FontProps } from "@/components/Typography/types";
import { fontSans } from "@/config/fonts";
import { useFontVariant } from "../../hook/useFontVariant";
import { FontVariant } from "../../types";

const H3 = ({
  children,
  variant = FontVariant.REGULAR,
  className,
  ...rest
}: FontProps): JSX.Element => {
  const fontClassName = useFontVariant(fontSans, variant);

  return (
    <h3 className={`${className} ${fontClassName} dark:text-slate-200`} {...rest}>
      {children}
    </h3>
  );
};
export default H3;
