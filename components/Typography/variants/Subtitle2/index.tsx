import { TitleExtendedProps, TitleVariant } from "@components/Typography/types";
import TextBase from "../TextBase";
import useBreakpoint from "@hooks/useBreakpoint";

const Subtitle2 = ({ children, style, variant = TitleVariant.REGULAR, ...rest }: TitleExtendedProps): JSX.Element => {
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

  const fontSize = isXs ? 14 : 16;

  return (
    <TextBase style={{ fontWeight: weight, fontSize: fontSize, letterSpacing: "0.016px", ...style }} {...rest}>
      {children}
    </TextBase>
  );
};
export default Subtitle2;
