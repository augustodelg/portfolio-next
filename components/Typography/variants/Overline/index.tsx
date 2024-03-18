import { TitleExtendedProps, TitleVariant } from "@components/Typography/types";
import useBreakpoint from "@hooks/useBreakpoint";
import TextBase from "../TextBase";

const Overline = ({ children, style, variant = TitleVariant.REGULAR, ...rest }: TitleExtendedProps): JSX.Element => {
  const { isXs } = useBreakpoint();

  let weight;
  switch (variant) {
    case TitleVariant.REGULAR:
      weight = 400;
      break;
    case TitleVariant.MEDIUM:
      weight = 500;
      break;
    case TitleVariant.SEMIBOLD:
      weight = 600;
      break;
    default:
      weight = 400;
      break;
  }

  const fontSize = isXs ? 10 : 12;

  return (
    <TextBase style={{ fontWeight: weight, fontSize: fontSize, letterSpacing: "0.18px", ...style }} {...rest}>
      {children}
    </TextBase>
  );
};
export default Overline;
