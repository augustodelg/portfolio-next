"use client";
import Timeline from "@/components/Timeline";
import Typography from "@/components/Typography";
import { FontVariant } from "@/components/Typography/types";
import { Button } from "@nextui-org/button";
import React from "react";
import { experienceData } from "./const";

const ExperienceSection: React.FC = () => {
  return (
    <div id="experiense" className="flex justify-center  items-center w-full h-screen md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-6/12 animate-appearance-in ">
      <div className="flex flex-col w-full justify-center gap-6 px-3 lg:px-0">
        <Typography.H2
          variant={FontVariant.BOLD}
          className="text-4xl lg:text-6xl text-center lg:text-right text-purple-950 mb-1 sm:mb-0"
        >
          Work experience
        </Typography.H2>
        <Timeline>
          {experienceData.map((item, index) => (
            <Timeline.Item
              key={index}
              point={item.point}
              date={item.date}
              title={item.title}
              subtitle={item.subtitle}
              current={item.current}
            >
              <Button radius="full" variant="solid" color="primary">
                <Typography.Body variant={FontVariant.BOLD}>
                  {item.buttonText}
                </Typography.Body>
              </Button>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default ExperienceSection;
