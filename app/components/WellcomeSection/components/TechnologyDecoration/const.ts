import { TechnologyItem } from "./types";

export const TECHNOLOGIES: TechnologyItem[] = [
  {
    name: "React",
    src: "/icons/react.png",
    width: 50,
    height: 50,
    alt: "React icon",
    configuration: `
    py-2
    top-[70%] 
    rotate-6 
    hover:scale-[1.2]
    -left-[5%] 
    scale-[0.8] 
    lg:scale-[1]
    lg:-left-[18%] 
    lg:top-[50%]  
    xl:-left-[30%] 
    xl:top-[35%] 
    2xl:top-[35%] 
    2xl:-left-[35%] 
    lg:-rotate-12 
    `,
  },
  {
    name: "Docker",
    src: "/icons/docker.png",
    width: 50,
    height: 60,
    alt: "Docker icon",
    configuration: `hidden
      py-2 top-[65%]
      -left-[10%]
      scale-[0.6]
      lg:block
      lg:scale-[1]
      lg:-left-[5%]
      lg:top-[85%]
      xl:-left-[10%]
      xl:top-[85%]
      2xl:top-[75%]
      2xl:-left-[20%]
      rotate-12
      hover:scale-[1.2]
      opacity-75`,
  },
  {
    name: "AWS",
    src: "/icons/aws.png",
    width: 50,
    height: 50,
    alt: "AWS icon",
    configuration:
      `py-2
      top-[45%]
      -right-[10%]
      opacity-90
      rotate-12
      scale-[0.6]
      lg:scale-[1]
      lg:top-[80%]
      lg:-right-[5%]
      xl:top-[80%]
      xl:-right-[20%]
      2xl:top-[85%]
      2xl:-right-[20%]
      hover:scale-[1.2]
      hover:opacity-100
      hover:blur-0`,
  },
  {
    name: "Rails",
    src: "/icons/rails.png",
    width: 50,
    height: 40,
    alt: "Rails icon",
    configuration: `
    top-[95%]
    -right-[-80%]
    scale-[0.6]
    -rotate-6
    opacity-80
    lg:scale-[1]
    lg:rotate-12
    lg:top-[20%]
    lg:-right-[10%]
    xl:top-[10%]
    xl:-right-[25%]
    2xl:-right-[30%]
    2xl:top-[15%]
    blur-[0.8px]
    hover:scale-[1.2]
    hover:blur-0
    hover:opacity-100`,
  },
  {
    name: "Kubernetes",
    src: "/icons/kubernetes.png",
    width: 60,
    height: 30,
    alt: "Kubernetes icon",
    configuration:
      `top-[97%]
      -right-[5%]
      scale-[0.6]
      -rotate-12
      scale-[0.6]
      opacity-90
      blur-[2px]
      py-2
      px-2
      lg:top-[45%]
      lg:-right-[10%]
      xl:top-[55%]
      xl:-right-[30%]
      2xl:top-[45%]
      2xl:-right-[45%]
      hover:scale-[0.8]
      hover:opacity-100
      hover:blur-0 `,
  },
  {
    name: "Node",
    src: "/icons/node.png",
    width: 50,
    height: 40,
    alt: "Node icon",
    configuration:
      `top-[62%]
      left-[10%]
      scale-[0.5]
      -rotate-12
      py-2
      opacity-50
      blur-[1px]
      lg:top-[15%]
      lg:-left-[10%]
      xl:top-[10%]
      xl:-left-[20%]
      2xl:top-[10%]
      2xl:-left-[20%]
      -rotate-12
      lg:scale-[0.7]
      hover:scale-[1]
      hover:opacity-100
      hover:blur-0`,
  },
  {
    name: "Proxmox",
    src: "/icons/proxmox.png",
    width: 50,
    height: 50,
    alt: "Proxmox icon",
    configuration:
      `hidden
      lg:block
      py-2
      -rotate-12
      scale-[0.7]
      opacity-60
      blur-[2px]
      lg:top-[95%]
      lg:left-[20%]
      xl:top-[75%]
      xl:-left-[35%]
      2xl:top-[65%]
      2xl:-left-[50%]
      hover:scale-[1]
      hover:opacity-100
      hover:blur-0`,
  },
];
