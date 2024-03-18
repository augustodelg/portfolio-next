import WelcomeSection from "./components/WellcomeSection";
import AboutmeSection from "./components/AboutmeSection";
import ExperienceSection from "./components/ExperienceSection";
import StudySection from "./components/StudySection";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Suspense fallback={<Loading />}>
        <WelcomeSection />
        <AboutmeSection />
        <ExperienceSection />
        <StudySection />
      </Suspense>
    </div>
  );
}
