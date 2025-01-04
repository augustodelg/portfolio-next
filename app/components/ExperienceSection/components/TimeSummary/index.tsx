import React from "react";
import Typography from "@/components/Typography";
import { FontVariant } from "@/components/Typography/types";

const TimeSummaryItem: React.FC<{ value: string; description: string }> = ({
  value,
  description,
}) => {
  return (
    <div className="flex flex-col bg-content1/40 py-8 md:py-16 w-full md:w-52 xl:w-60 rounded-3xl backdrop-blur-xl shadow-md">
      <Typography.H2
        variant={FontVariant.BOLD}
        className="text-gray-800 text-2xl xl:text-3xl text-center"
      >
        {value}
      </Typography.H2>
      <Typography.Body className="text-gray-800 dark:text-gray-300 text-sm xl:text-md text-center">
        {description}
      </Typography.Body>
    </div>
  );
};

export const TimeSummary = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-20 lg:gap-0 content-stretch place-items-center p-6 mt-10">
        <TimeSummaryItem value="4+" description="Years of work experience" />
        <TimeSummaryItem value="10+" description="Worked on projects" />
        <TimeSummaryItem value="3+" description="Led projects" />
        <TimeSummaryItem value="12+" description="Years making IT stuffs" />
    </div>
  );
};
