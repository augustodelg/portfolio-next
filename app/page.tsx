import WelcomeSection from "./components/WellcomeSection";
import AboutmeSection from "./components/AboutmeSection";
import ExperienceSection from "./components/ExperienceSection";
import { Suspense } from "react";
import Loading from "./loading";
import StudySection from "./components/StudySection";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Suspense fallback={<Loading />}>
        <WelcomeSection />
        <AboutmeSection />
        <ExperienceSection />
        
        {/* <StudySection /> */}
      </Suspense>
    </div>
  );
}
