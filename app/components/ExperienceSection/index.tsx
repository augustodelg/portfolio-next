"use client";
import Timeline from "@/components/Timeline";
import Typography from "@/components/Typography";
import { FontVariant } from "@/components/Typography/types";
import { Button } from "@nextui-org/button";
import React from "react";
import { experienceData } from "./const";

// const ExperienceSection: React.FC = () => {
//   return (
//     <div
//       id="experience"
//       className="flex justify-center  items-center w-full h-[calc(100dvh)] min-h-[900px]  max-w-[920px] animate-appearance-in "
//     >
//       <div className="flex flex-col pt-14 w-full justify-center gap-6 px-3 lg:px-0">
//         <Typography.H2
//           variant={FontVariant.BOLD}
//           className="text-4xl lg:text-6xl text-center lg:text-right text-purple-950 mb-1 sm:mb-0"
//         >
//           Work experience
//         </Typography.H2>
//         <div className="lg:ml-8">
//           <Timeline>
//             {experienceData.map((item, index) => (
//               <Timeline.Item
//                 key={index}
//                 point={item.point}
//                 date={item.date}
//                 title={item.title}
//                 subtitle={item.subtitle}
//                 current={item.current}
//               >
//                 <Button radius="full" variant="solid" color="primary">
//                   <Typography.Body variant={FontVariant.BOLD}>
//                     {item.buttonText}
//                   </Typography.Body>
//                 </Button>
//               </Timeline.Item>
//             ))}
//           </Timeline>
//         </div>
//       </div>
//     </div>
//   );
// };
const AnimatedBackground = () => {
  return (
    <>
      <div className="absolute top-0 right-40 w-72 h-72 bg-orange-200 dark:bg-indigo-300 rounded-full mix-blend-multiply filter opacity-70 dark:opacity-10 blur-3xl animate-blob"></div>
      <div className="absolute top-0 right-20 w-72 h-72  bg-indigo-600 dark:bg-indigo-500 rounded-full mix-blend-multiply filter opacity-30 dark:opacity-10 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 right-20 w-72 h-72 bg-indigo-400 dark:bg-indigo-100  rounded-full mix-blend-multiply filter  opacity-30 dark:opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
      <div className="absolute -bottom-8 right-40 w-72 h-72 bg-orange-500 dark:bg-indigo-400 rounded-full mix-blend-multiply filter opacity-30 dark:opacity-10 blur-3xl animate-blob animation-delay-6000"></div>
      <div className="absolute -bottom-8 left-10 w-72 h-72 dark:bg-indigo-300 rounded-full mix-blend-multiply filter opacity-10 blur-3xl animate-blob"></div>
      <div className="absolute -bottom-8 left-12 w-72 h-72 dark:bg-indigo-500 rounded-full mix-blend-multiply filter opacity-10 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 dark:bg-indigo-100  rounded-full mix-blend-multiply filter opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
    </>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative items-center w-full md:w-full xl:w-10/12 animate-appearance-in px-10 overflow-visible xl:px-40"
    >
      <AnimatedBackground />
      <div className="lg:pb-20 flex flex-col gap-4">
        <Typography.H2
          variant={FontVariant.BOLD}
          className="text-indigo-950 text-6xl text-left"
        >
          My experience
        </Typography.H2>
        <Typography.Body
          className="text-gray-800 dark:text-gray-300 text-base lg:text-2xl text-left"
          variant={FontVariant.REGULAR}
        >
          I always strive to give my best in every <strong>project</strong>,{" "}
          <strong>company</strong>, <strong>client</strong> I work with.
        </Typography.Body>
      </div>
      <div className="grid grid-rows-5 gap-4">
        <div className="col-span-12 lg:row-start-1 lg:row-end-1 lg:col-start-5 lg:col-end-13 bg-slate-800 hover:bg-slate-700 transition-all duration-300 p-8 rounded-full flex justify-between align-middle drop-shadow-2xl">
          <div>
            <Typography.H2 variant={FontVariant.BOLD} className="text-xl">
              {experienceData[0].subtitle}
            </Typography.H2>
            <Typography.Body>
              Technical Lead - FullStack - Cloud Developer
            </Typography.Body>
          </div>
          <Typography.Body variant={FontVariant.BOLD} className=" lg:text-sm self-center">
            {experienceData[0].date}
          </Typography.Body>
        </div>
        <div className="col-span-12 lg:row-start-2 lg:row-end-2 lg:col-start-5 lg:col-end-10 bg-slate-800 hover:bg-slate-700 transition-all duration-300 p-8 rounded-full flex justify-between align-middle drop-shadow-2xl">
          <div>
            <Typography.H2 variant={FontVariant.BOLD} className="text-xl ">
              {experienceData[1].subtitle}
            </Typography.H2>
            <Typography.Body>{experienceData[1].title}</Typography.Body>
          </div>
          <Typography.Body variant={FontVariant.BOLD} className=" lg:text-sm self-center">
            {experienceData[1].date}
          </Typography.Body>
        </div>
        <div className="col-span-12 lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-6 bg-slate-800 hover:bg-slate-700 transition-all duration-300 p-8 rounded-full flex justify-between align-middle drop-shadow-2xl">
          <div>
            <Typography.H2 variant={FontVariant.BOLD} className="text-xl">
              {experienceData[2].subtitle}
            </Typography.H2>
            <Typography.Body>{experienceData[2].title}</Typography.Body>
          </div>
          <Typography.Body variant={FontVariant.BOLD} className="lg:text-sm self-center">
            {experienceData[2].date}
          </Typography.Body>
        </div>
        <div className="row-start-4 row-end-5 col-start-1 col-end-13 bg-slate-800 hover:bg-slate-700 transition-all duration-300 p-8 rounded-full flex justify-between align-middle drop-shadow-2xl">
          <div>
            <Typography.H2 variant={FontVariant.BOLD} className="text-xl">
              {experienceData[3].subtitle}
            </Typography.H2>
            <Typography.Body>{experienceData[3].title}</Typography.Body>
          </div>
          <Typography.Body variant={FontVariant.BOLD} className="lg:text-sm self-center">
            {experienceData[3].date}
          </Typography.Body>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
