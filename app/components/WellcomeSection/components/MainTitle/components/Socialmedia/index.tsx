import Image from "next/image";
import React from "react";

const Socialmedia: React.FC = () => {
  return (
    <div className="flex gap-4 pt-1 pl-1.5 ">
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
