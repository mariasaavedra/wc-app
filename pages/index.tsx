import type { NextPage } from "next";
import { Column } from "../components/Column";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import { ImageCard } from "../components/ImageCard";
import Text from "../components/Text";
import SPONSORS from "../constants/sponsors";
import Link from "next/link";
import { Button } from "../components/Button";
import TextBanner from "../components/TextBanner";
import Badge from "../components/Badge";
import FlexImages from "../components/FlexImages";
import styles from "../styles/components/Badge.module.scss";
import Carousel from "../components/Carousel";
import { Key } from "react";

const slideSplices = [];
const slides = [];
const slideCount = 4;
let slideSplice = [];

while(SPONSORS.length > 0)
{
  slideSplice = SPONSORS.splice(0, slideCount);
  slideSplices.push(slideSplice);
}

for(let i = 0 ; i < slideSplices.length; i++){
  var slide = (
    <div  key={i} className="flex flex-wrap align-center justify-center gap-12 my-12">
    {
      slideSplices[i].map((item: { url: string; name: string; }, idx: Key) => {
            return ( <div key={idx}className='w-48' ><img src={item.url} alt={item.name}></img></div> ) 
      })
    }
    </div>
    );
  slides.push(slide);
}

const Home: NextPage = () => {
 
  return (
    <div className="container-fluid mx-auto ">
      <Hero title="Creating a pipeline of future-ready professionals.">
        <>
          <Text size="b1" className="mt-2">
            We serve the urban core of Kansas City, exposing youth to various
            programming languages, technology, cyber security, and computer
            science concepts.
            <br />
            <br />
            Our mission is to give youth the opportunity to learn technology
            concepts, and leadership skills; creating a pipeline of future-ready
            professionals through project-based learning and innovative programs
          </Text>
          <br />
          <Button href="/programs">Get Started</Button>
        </>
      </Hero>

      <div className="bg-brand-purple mt-10">
        <TextBanner title="Learn to Code, Code to Learn">
          <Text className="mt-4 text-center w-100 mx-auto" size="b1">
            WeCodeKC introduces coding for kids through project-based or game
            development learning. Our students gradually increase their
            skill levels to writing their own code in JavaScript and Python.
            WeCodeKC also introduces various other technology concepts including
            Virtual Reality, Machine Learning and more!
          </Text>
        </TextBanner>
      </div>

      <Section>
        <div>
          <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-4">
            <Badge planet="Fusion fuchsia" label="HTML & CSS">
              {/* As a techstraunaut, your journey is yours alone! Fuchsia is the
              embodiment of uniqueness and confidence. After you master all the
              levels, you’ll realize the power of your own shine. */}
              <img className={styles.badgeImg} src="/images/magenta.png" />
            </Badge>
            <Badge planet="Aegean Cool" level="02" label="HTML & CSS">
              {/* We hope that you’ll cruise through planet Aegean Cool! You’ve
              pushed it this far building on basic functions and growing your
              knowledge. The Aegean blue hue badges will be a mark of true trust
              in your intelligence and the ability to move forward. */}
              <img className={styles.badgeImg} src="/images/blue.png" />
            </Badge>
            <Badge planet="Indigo-go" level="03" label="JavaScript">
              {/* You’ve made it halfway; look at you Indigo-Go! We love your
              dedication and you’ll soon prove your mastery of the core
              principles of Javascript. Your wisdom is infinite, keep on going! */}
              <img className={styles.badgeImg} src="/images/purple.png" />
            </Badge>
            <Badge planet="Galactic Green" level="04" label="Python">
              {/* Groundbreaking work getting to Galactic Green! Here you’ll learn
              and demonstrate your rockin’ Python skills. */}
              <img className={styles.badgeImg} src="/images/teal.png" />
            </Badge>
            <Badge planet="Gleaming Gold" level="05" label="App Inventor">
              {/* The final step in your astonishing techstronaut journey–
              completing Gleaming Gold. On this last planet, the ease you’ll
              have in creating an app will seem like true sorcery. As this
              become the last stop, you’ll learn you are the magic that keeps
              tech going. */}
              <img className={styles.badgeImg} src="/images/yellow.png" />
            </Badge>
          </div>
        </div>
      </Section>

      <div className="bg-brand-purple mt-10">
        <TextBanner title="Our Mission">
          <Text className="mt-4 text-center" size="b1">
            Our mission is to give youth the opportunity to learn technology
            concepts, and leadership skills. <br /> We're creating a pipeline of
            future-ready professionals through project-based learning and
            innovative programs.
          </Text>
        </TextBanner>
      </div>

    <div className="pb-10">
      <Carousel size={['lg']} pagination={["dots"]} slides={slides}></Carousel>
    </div>

    </div>
  );
};

export default Home;
