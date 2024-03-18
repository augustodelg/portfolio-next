import { TitleExtendedProps } from "@components/Typography/types";
import Base from "../TitleBase";

const H6 = ({ style, children, ...rest }: TitleExtendedProps): JSX.Element => {
  return (
    <Base style={{ fontSize: 20, ...style }} level={5} {...rest}>
      {children}
    </Base>
  );
};
export default H6;
