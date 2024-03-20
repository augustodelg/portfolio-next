import Image from "next/image";
import React from "react";

const Socialmedia: React.FC = () => {
  return (
    <div className="flex gap-4  w-max mx-auto lg:mx-0 lg:pl-1 mt-2">
      <Image
        src={"/icons/Github.svg"}
        width={40}
        height={40}
        alt={"Github"}
        className="hover:scale-[1.2] transition-all duration-200"
      />
      <Image
        src={"/icons/Linkedin.svg"}
        width={40}
        height={40}
        alt={"Linkedin"}
        className="hover:scale-[1.2] transition-all duration-200"
      />
    </div>
  );
};

export default Socialmedia;
