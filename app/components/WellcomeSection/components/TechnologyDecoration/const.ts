import { TechnologyItem } from "./types";

export const technologies: TechnologyItem[] = [
  {
    name: "React",
    src: "/icons/react.png",
    width: 50,
    height: 50,
    alt: "React icon",
    configuration: "py-2 top-90 left-10 -rotate-12 hover:scale-[0.8]",
  },
  {
    name: "Docker",
    src: "/icons/docker.png",
    width: 50,
    height: 60,
    alt: "Docker icon",
    configuration:
      "py-2 top-[700px] left-44 rotate-12 hover:scale-[0.8] opacity-75",
  },
  {
    name: "AWS",
    src: "/icons/aws.png",
    width: 50,
    height: 50,
    alt: "AWS icon",
    configuration:
      "py-2 top-[600px] right-5 rotate-12 hover:scale-[0.8] opacity-90",
  },
  {
    name: "Rails",
    src: "/icons/rails.png",
    width: 50,
    height: 40,
    alt: "Rails icon",
    configuration:
      "top-[100px] right-20 rotate-12  opacity-80 blur-[0.8px] hover:scale-[1.2] hover:blur-0 hover:opacity-100",
  },
  {
    name: "Kubernetes",
    src: "/icons/kubernetes.png",
    width: 50,
    height: 40,
    alt: "Kubernetes icon",
    configuration:
      "py-2 top-[350px] -right-20 -rotate-12 scale-[0.6] opacity-90 blur-[2px] hover:scale-[0.8] hover:opacity-100 hover:blur-0 ",
  },
  {
    name: "Node",
    src: "/icons/node.png",
    width: 50,
    height: 40,
    alt: "Node icon",
    configuration:
      "py-2 top-[150px] left-40 -rotate-12 scale-[0.7] opacity-50 blur-[1px]  hover:scale-[1]  hover:opacity-100 hover:blur-0",
  },
  {
    name: "Proxmox",
    src: "/icons/proxmox.png",
    width: 50,
    height: 40,
    alt: "Proxmox icon",
    configuration:
      "py-2 top-[570px] -left-20 -rotate-12 scale-[0.7] hover:scale-[0.4] opacity-50 blur-[2px]",
  },
];
