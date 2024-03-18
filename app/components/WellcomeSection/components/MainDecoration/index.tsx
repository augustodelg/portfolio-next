import Image from "next/image";
import React from "react";

const MainDecoration: React.FC = () => {
  return (
    <div>
      <Image
        className="hidden md:block rotate-3 absolute xl:-right-40 xl:top-32 xs:hidden xs:hidden motion-safe:animate-none z-10"
        src={"/images/astronaut.png"}
        width={525}
        height={525}
        alt={"Astronaut and clouds"}
      />
      <Image
        className="hidden md:block xl:absolute  xl:-right-28 xl:top-28 xl:size-10 xs:hidden xs:hidden motion-safe:animate-none -z-10 xl:scale-110"
        src={"/images/space-background.svg"}
        width={1200}
        height={450}
        alt={"Space"}
      />
    </div>
  );
};

export default MainDecoration;
