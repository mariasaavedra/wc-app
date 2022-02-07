import type { NextPage } from "next";
import { Column } from "./components/Column";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Image } from "./components/Image";
// import styles from "../styles/Image.module.css";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Section>
      <Image></Image>
      </Section>
    </div>
  );
};

export default Home;
