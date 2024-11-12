import { DataEntry, InfoProps } from "../utils/types";
import Page from "../components/Page";

const projects: DataEntry[] = [
  {
    name: "Wedgy Music",
    role: "Website for Leeds-based musician Wedgy in Typescript and React",
    imageUrl: "./src/assets/wedgy.jpg",
    url: "https://wedgy.netlify.app/",
  },
  {
    name: "Clarks Bowling Club",
    role: "Website for French band Clarks Bowling Club in Typescript and React, using parallax and video effects",
    imageUrl: "./src/assets/clarks.jpg",
    url: "https://clarksbowlingclub.netlify.app/",
  },
  {
    name: "Ruby Kiwinda",
    role: "Website for visual artist Ruby Kiwinda",
    imageUrl: "./src/assets/ruby-kiwinda.jpg",
    url: "https://rubykiwinda.com/",
  },
];

const projectsInfo: InfoProps = {
  title: "Projects",
  description:
    "A selection of projects Viatora has delivered for previous clients.",
};

export default function Projects() {
  return <Page data={projects} info={projectsInfo} />;
}
