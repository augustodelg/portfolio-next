import Image from "next/image";
import { TitleSnappler } from "./components/SnapplerTitle";


export const experienceData = [
    {
      point: (
        <Image
          alt="Rocket icon"
          quality={100}
          src="/images/rocket-timeline.png"
          width={70}
          height={70}
        />
      ),
      date: "August 2022 - Ongoing",
      title: <TitleSnappler />,
      subtitle: "Snappler",
      buttonText: "Show more"
    },
    {
      title: "Fullstack Developer",
      subtitle: "Free Lancer",
      date: "January 2023 - September 2023",
      buttonText: "Show more"
    },
    {
      date: "January 2021 - August 2022",
      title: "FullStack (React JS/Ruby on Rails) - Data Engineer (Datawarehouse)",
      subtitle: "Universidad de Almirante Brown (Remote)",
      buttonText: "Show more"
      
    },
  ];