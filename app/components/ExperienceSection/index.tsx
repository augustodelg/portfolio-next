"use client";
import Timeline from "@/components/Timeline";
import Typography from "@/components/Typography";
import { FontVariant } from "@/components/Typography/types";
import { Button } from "@nextui-org/button";
import React from "react";
import { experienceData } from "./const";

const ExperienceSection: React.FC = () => {
  return (
    <div id="experiense" className="flex  items-center  h-screen">
      <div className="flex flex-col justify-start gap-6">
        <Typography.H2
          variant={FontVariant.BOLD}
          className="text-5xl text-purple-950 mb-1 sm:mb-0"
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
