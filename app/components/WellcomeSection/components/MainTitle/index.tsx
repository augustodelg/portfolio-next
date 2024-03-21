import ChangingComponent from "@/components/ChangingComponent";
import Typography from "@/components/Typography";
import { FontVariant } from "@/components/Typography/types";
import React from "react";
import Socialmedia from "./components/Socialmedia";

const MainTitle: React.FC = () => {
  return (
    <div>
      <Typography.Body2
        variant={FontVariant.REGULAR}
        className="text-md pl-[6px] leading-tight text-gray-500 "
      >
        Alias Taca
      </Typography.Body2>
      <div className="flex  flex-col md:flex-row">
        <Typography.H1
          variant={FontVariant.BOLD}
          className="text-[130px] leading-none  text-purple-950"
        >
          HOLA
        </Typography.H1>
        <div className="bg-purple-950  lg:ml-2 rounded-lg  lg:-rotate-90 lg:self-center ">
          <Typography.H1
            variant={FontVariant.BOLD}
            className="text-4xl p-4 text-white text-center"
          >
            SOY
          </Typography.H1>
        </div>
        <div className="my-auto ">
          <Typography.H3
            variant={FontVariant.BOLD}
            className="text-3xl xl:text-5xl text-purple-950"
          >
            Augusto
          </Typography.H3>
          <Typography.H3
            variant={FontVariant.BOLD}
            className="text-5xl text-purple-950"
          >
            Del Grosso.
          </Typography.H3>
        </div>
      </div>
      <div className="flex pl-[4.8px]">
        <ChangingComponent
          components={[
            <Typography.H3
              key={"FULL STACK"}
              variant={FontVariant.BOLD}
              className="text-5xl text-blue-500 animate-appearance-in transition-all	duration-2000"
            >
              FULL STACK
            </Typography.H3>,
            <Typography.H3
              key={"CLOUD"}
              variant={FontVariant.BOLD}
              className="text-5xl text-red-400 animate-appearance-in transition-all	duration-2000"
            >
              CLOUD NATIVE
            </Typography.H3>,
          ]}
          intervalTime={3000}
        />
        <Typography.H3
          variant={FontVariant.BOLD}
          className="text-5xl pl-2 text-purple-950"
        >
          DEVELOPER.
        </Typography.H3>
      </div>
      <Socialmedia />
    </div>
  );
};

export default MainTitle;
