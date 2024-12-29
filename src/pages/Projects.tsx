import { DataEntry, InfoProps } from "../utils/types";
import Page from "../components/Page";
import clarksImage from "../assets/clarks.jpg";
import rubyImage from "../assets/ruby-kiwinda.jpg";
import wedgyImage from "../assets/wedgy.jpg";
import twdImage from "../assets/twd.svg";

const projects: DataEntry[] = [
  {
    name: "Wedgy Music",
    role: "Website for Leeds-based musician Wedgy in Typescript and React",
    imageUrl: wedgyImage,
    url: "https://wedgymusic.co.uk/",
  },
  {
    name: "Things We Do",
    role: "Offline first mobile app for managing behaviour control conditions such as Tourette's syndrome",
    imageUrl: twdImage,
    url: "https://thingswedo.netlify.app/",
  },
  {
    name: "Clarks Bowling Club",
    role: "Website for French band Clarks Bowling Club in Typescript and React, using parallax and video effects",
    imageUrl: clarksImage,
    url: "https://clarksbowlingclub.netlify.app/",
  },
  {
    name: "Ruby Kiwinda",
    role: "Website for visual artist Ruby Kiwinda",
    imageUrl: rubyImage,
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
