import Image from "next/image";
import { TitleSnappler } from "./components/SnapplerTitle";

export const experienceData = [
  {
    point: (
    <Image
      alt="🚀 Rocket icon"
      quality={100}
      src="/images/rocket-timeline.png"
      width={70}
      height={70}
    />
    ),
    date: "August 2022 ~",
    title: <TitleSnappler />,
    current: true,
    subtitle: "Snappler",
    buttonText: "Show more"
  },
  {
    title: "Fullstack Developer - DevOps",
    subtitle: "Free Lancer",
    date: "January 2023 - September 2023",
    buttonText: "Show more"
  },
  {
    date: "January 2021 - August 2022",
    title: "FullStack (React JS/Ruby on Rails) - Data Engineer",
    subtitle: "Universidad de Almirante Brown",
    buttonText: "Show more"
  },
  {
    date: "Ever since I got my first PC ~",
    subtitle: "My PC",
    title: "Working on my own stuff 👨‍💻 ",
  }

  ];