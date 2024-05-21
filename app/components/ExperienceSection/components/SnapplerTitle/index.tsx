import Typography from "@/components/Typography";
import { FontVariant } from "@/components/Typography/types";
import Image from "next/image";

export const TitleSnappler = () => {
  return (
    <div className="flex flex-row justify-start align-middle items-center gap-4">
      <Typography.H2
        variant={FontVariant.BOLD}
        className="text-xl lg:text-2xl text-primary dark:!text-primary mb-1 sm:mb-0 "
      >
        FullStack - Cloud Native Developer
      </Typography.H2>
      <Image
        className="hidden lg:block rounded-full"
        src="/icons/aws.png"
        quality={100}
        width={25}
        height={25}
        alt={"Amazon Web Services icon"}
      />
      <Image
        className="hidden lg:block rounded-full"
        src="/icons/sst.png"
        quality={100}
        width={25}
        height={25}
        alt={"SST icon"}
      />
      <Image
        className="hidden lg:block rounded-full"
        src="/icons/react.png"
        quality={100}
        width={25}
        height={25}
        alt={"React icon"}
      />
      <Image
        className="hidden lg:block rounded-full"
        src="/icons/react-native.png"
        quality={100}
        width={25}
        height={25}
        alt={"React Native icon"}
      />
      <Image
        className="hidden lg:block rounded-full"
        src="/icons/rails.png"
        quality={100}
        width={25}
        height={25}
        alt={"Ruby on Rails icon"}
      />
    </div>
  );
};
