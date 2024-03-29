import WelcomeSection from "./components/WellcomeSection";
import AboutmeSection from "./components/AboutmeSection";
import ExperienceSection from "./components/ExperienceSection";
import StudySection from "./components/StudySection";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-screen ">
      <WelcomeSection />
      <AboutmeSection />
      {/* <ExperienceSection /> */}
      {/* <StudySection /> */}
    </div>
  );
}
