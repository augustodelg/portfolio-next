import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { TechnologyCardProps } from "./types";

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  alt,
  configuration,
  height,
  width,
  src,
}) => {
  return (
    <Card
      shadow="lg"
      isBlurred
      className={`absolute ${configuration} dark:bg-content1`}
    >
      <CardBody className="animate-appearance-in delay-200 py-2 ">
        <Image src={src} width={width} height={height} alt={alt} />
      </CardBody>
    </Card>
  );
};

export default TechnologyCard;
