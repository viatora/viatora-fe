import { DataEntry, InfoProps } from "../utils/types";
import Page from "../components/Page";
import jackImage from "../assets/jack.png";

const people: DataEntry[] = [
  {
    name: "Maxime Downe",
    role: "Co-Founder / Full-Stack Developer",
    imageUrl:
      "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308458-stock-illustration-unknown-person-silhouette-profile-picture.jpg",
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
