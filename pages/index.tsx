import type { NextPage } from "next";
import { Column } from "./components/Column";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { ImageCard } from "./components/ImageCard";
import { Text } from "./components/Text";
import { Footer } from "./components/Footer";
// import styles from "../styles/Image.module.css";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      
      <Hero></Hero>

      <Section>
        <ImageCard imagePosition="right">
          <h3 className="text-lg">Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula
            turpis, laoreet sed hendrerit non, mattis ut velit. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos
          </p>
        </ImageCard>
      </Section>
      <Section>
        <div className="columns-1 md:columns-3 sm:columns-1">
        <img className="mx-auto" src="https://placehold.co/300"></img>
        <img className="mx-auto" src="https://placehold.co/300"></img>
        <img className="mx-auto" src="https://placehold.co/300"></img>
        </div>
        
      </Section>

      <Section>
        <Column>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua..
          </Text>
        </Column>
      </Section>

      <Section>
        <Footer></Footer>
      </Section>
    </div>
  );
};

export default Home;
