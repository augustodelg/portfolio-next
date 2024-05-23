import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React, { PropsWithChildren } from "react";
import Typography from "../Typography";
import { FontVariant } from "../Typography/types";
import { TimelineItemProps } from "./types";

const Timeline = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative flex w-auto h-auto animate-appearance-in">
      <div className="w-full">{children}</div>
    </div>
  );
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  date,
  title,
  description,
  point,
  subtitle,
}) => {
  return (
    <div className="relative lg:pl-10 py-6 group">
      <div
        className="
        flex 
        flex-col
        lg:pl-6
        sm:flex-row 
        items-start
        mb-1 
        group-last:before:hidden
        before:absolute  
        sm:before:left-0
        before:h-full
        before:px-px
        before:bg-slate-300
        before:ml-[48%]
        lg:sm:before:ml-[1rem]
        before:self-start 
        before:-translate-x-4/4
        before:translate-y-3
        after:absolute 
        after:left-2
        sm:after:left-200
        lg:after:w-3
        lg:after:h-3 
        lg:after:box-content 
        after:bg-indigo-600
        lg:after:border-5
        after:border-slate-20
        after:rounded-full
        sm:after:ml-[0.5rem]  
        sm:before:mt-16
        sm:after:mt-16
        after:-translate-x-1/2
        after:translate-y-1.
        before:left-2
        after:mt-10
        before:mt-16"
      >
        <Card
          fullWidth
          classNames={{
            base: ["px-4", "py-2", "overflow-visible"],
            header: ["pb-0"],
            body: ["pt-0"],
          }}
        >
          {point && (
            <div className="z-10 hidden lg:block absolute -left-20 top-6">
              {point}
            </div>
          )}
          <CardHeader>
            {typeof title === "string" ? (
              <Typography.H2
                variant={FontVariant.BOLD}
                className="text-xl lg:text-2xl text-primary mb-1 sm:mb-0 dark:!text-primary"
              >
                {title}
              </Typography.H2>
            ) : (
              title
            )}
          </CardHeader>
          <CardBody>
            <Typography.H2
              variant={FontVariant.BOLD}
              className="text-base lg:text-xl text-slate-900"
            >
              {subtitle}
            </Typography.H2>

            <Typography.H4 className="text-sm text-gray-500">
              {date}
            </Typography.H4>

            <div className="text-slate-500">{description}</div>
            <div className="pt-2">{children}</div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

Timeline.Item = TimelineItem;

export default Timeline;
