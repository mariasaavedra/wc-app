import type { NextPage } from "next";
import { Column } from "./components/Column";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { ImageCard } from "./components/ImageCard";
import { Text } from "./components/Text";
import { Footer } from "./components/Footer";
// import styles from "../styles/Image.module.css";

const homepageData = fetch('http://localhost:1337/api/homepage?populate=*', {
}).then(response => response.json())
.then(data => console.log(data));

console.log(homepageData)

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
        <div className="columns-1 md:columns-3 sm:columns-3">
        <img className="mx-auto" src="https://source.unsplash.com/random/600x600/?hackathon"></img>
        <img className="mx-auto" src="https://source.unsplash.com/random/600x600/?tech"></img>
        <img className="mx-auto" src="https://source.unsplash.com/random/600x600/?coding"></img>
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

      <Footer />
    </div>
  );
};

export default Home;
