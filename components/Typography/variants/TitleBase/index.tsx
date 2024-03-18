import Line from "@components/Line";
import { TitleExtendedProps, TitleVariant } from "@components/Typography/types";
import { Typography } from "antd";

const TitleBase = ({
  children,
  style,
  variant = TitleVariant.REGULAR,
  withMark = false,
  ...rest
}: TitleExtendedProps): JSX.Element => {
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

  return (
    <Typography.Title style={{ fontWeight: weight, position: "relative", ...style }} {...rest}>
      {withMark && <Line />}
      {children}
    </Typography.Title>
  );
};
export default TitleBase;
