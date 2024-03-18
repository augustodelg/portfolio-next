import { TitleExtendedProps, TitleVariant } from "@/components/Typography/types";

const TextBase = ({ children, style, variant = TitleVariant.REGULAR, ...rest }: TitleExtendedProps): JSX.Element => {
  let weight;
  switch (variant) {
    case TitleVariant.REGULAR:
      weight = 400;
      break;
    case TitleVariant.MEDIUM:
      weight = 500;
      break;
    case TitleVariant.BOLD:
      weight = 800;
      break;
    default:
      weight = 400;
      break;
  }
  return (
    <Typography.Text style={{ fontWeight: weight, ...style }} {...rest}>
      {children}
    </Typography.Text>
  );
};
export default TextBase;
