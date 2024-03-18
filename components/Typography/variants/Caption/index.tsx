import { TitleExtendedProps, TitleVariant } from "@components/Typography/types";
import TextBase from "../TextBase";
import useBreakpoint from "@hooks/useBreakpoint";

const Caption = ({ children, style, variant = TitleVariant.REGULAR, ...rest }: TitleExtendedProps): JSX.Element => {
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

  const fontSize = isXs ? 11 : 14;

  return (
    <TextBase style={{ fontWeight: weight, fontSize: fontSize, letterSpacing: "0.056px", ...style }} {...rest}>
      {children}
    </TextBase>
  );
};
export default Caption;
