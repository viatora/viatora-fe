import { DataEntry, InfoProps } from "../utils/types";
import Page from "../components/Page";
import maxImage from "../assets/max.jpg";
import jackImage from "../assets/jack.png";

const people: DataEntry[] = [
  {
    name: "Maxime Downe",
    role: "Co-Founder / Full-Stack Developer",
    imageUrl: maxImage,
    url: "https://www.linkedin.com/in/maxime-downe-642ba74b",
  },
  {
    name: "Jack Casstles-Jones",
    role: "Co-Founder / Full-Stack Developer",
    imageUrl: jackImage,
    url: "https://www.linkedin.com/in/jackcasstlesjones/",
  },
];

const aboutInfo: InfoProps = {
  title: "Meet our team",
  description:
    "We’re a highly motivated team and passionate about delivering sustainable web solutions and achieve the best results for our clients.",
};

export default function About() {
  return <Page data={people} info={aboutInfo} />;
}
