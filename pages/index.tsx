import type { NextPage } from "next";
import { Column } from "../components/Column";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import { ImageCard } from "../components/ImageCard";
import Text from "../components/Text";

import Link from "next/link";
import { Button } from "../components/Button";
import TextBanner from "../components/TextBanner";

const Home: NextPage = () => {
  return (
    <div className="container-fluid mx-auto">
      <Hero title="Creating a pipeline of future-ready professionals.">
        <>
          <Text size="b1">
            We serve the urban core of Kansas City, exposing youth to various
            programming languages, technology, cyber security, and computer
            science concepts.
          </Text>
          <br />
          <Button>Get Started</Button>
        </>
      </Hero>

      <div className="bg-brand-purple mt-10">
        <TextBanner title="Learn to Code, Code to Learn">
          <Text className="mt-4 text-center" size="b1">
            WeCodeKC introduces coding for kids through project-based or game
            development learning. Our students begin their tech journey using
            Scratch, which is block-based coding, and gradually increase their
            skill levels to writing their own code in JavaScript and Python.
            WeCodeKC also introduces various other technology concepts including
            Virtual Reality, Machine Learning, NFTs, and more!
          </Text>
        </TextBanner>
      </div>

      <Section>
        <div className="flex flex-wrap align-center justify-center gap-4 p-10">
          <div className="grid grid-cols-1 w-52 shadow-xl">
            <div className="bg-brand-Magenta p-4 rounded-t-md text-white h-28">
              <p className="text-2xl font-bold">LEVEL 01</p>
              <p className="font-simibold text-lg">Planet:</p>
              <p className="italic">Fusion fuchsia</p>
            </div>
            <div>
              <p className="p-4 h-80 bg-white">
                As a techstraunaut, your journey is yours alone! Fuchsia is the
                embodiment of uniqueness and confidence. After you master all
                the levels, you’ll realize the power of your own shine.
              </p>
            </div>
            <div className="bg-brand-Magenta p-4 pt-2 rounded-b-md text-white h-24">
              <p className="font-simibold text-lg">Scratch Badges:</p>
              <p>Beginner, Intermediate, Advanced</p>
            </div>
          </div>

          <div className="grid grid-cols-1 w-52 shadow-xl">
            <div className="bg-brand-blue p-4 rounded-t-md text-white h-28">
              <p className="text-2xl font-bold">LEVEL 02</p>
              <p className="font-simibold text-lg">Planet:</p>
              <p className="italic">Aegean Cool</p>
            </div>
            <div>
              <p className="p-4 h-80 bg-white">
                We hope that you’ll cruise through planet Aegean Cool! You’ve
                pushed it this far building on basic functions and growing your
                knowledge. The Aegean blue hue badges will be a mark of true
                trust in your intelligence and the ability to move forward.
              </p>
            </div>
            <div className="bg-brand-blue p-4 pt-2 rounded-b-md text-white h-24">
              <p className="font-simibold text-lg">HTML/CSS Badges:</p>
              <p>Beginner, Intermediate, Advanced</p>
            </div>
          </div>

          <div className="grid grid-cols-1 w-52 shadow-xl">
            <div className="bg-brand-purple p-4 rounded-t-md text-white h-28">
              <p className="text-2xl font-bold">LEVEL 03</p>
              <p className="font-simibold text-lg">Planet:</p>
              <p className="italic">Indigo-go</p>
            </div>
            <div>
              <p className="p-4 h-80 bg-white">
                You’ve made it halfway; look at you Indigo-Go! We love your
                dedication and you’ll soon prove your mastery of the core
                principles of Javascript. Your wisdom is infinite, keep on
                going!
              </p>
            </div>
            <div className="bg-brand-purple p-4 pt-2 rounded-b-md text-white h-24">
              <p className="font-simibold text-lg">Javascript Badges:</p>
              <p>Beginner, Intermediate, Advanced</p>
            </div>
          </div>

          <div className="grid grid-cols-1 w-52 shadow-xl">
            <div className="bg-brand-green p-4 rounded-t-md text-white h-28">
              <p className="text-2xl font-bold">LEVEL 04</p>
              <p className="font-simibold text-lg">Planet:</p>
              <p className="italic">Galactic Green</p>
            </div>
            <div>
              <p className="p-4 h-80 bg-white">
                Groundbreaking work getting to Galactic Green! Here you’ll learn
                and demonstrate your rockin’ Python skills.
              </p>
            </div>
            <div className="bg-brand-green p-4 pt-2 rounded-b-md text-white h-24">
              <p className="font-simibold text-lg">Python Badges:</p>
              <p>Beginner, Intermediate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 w-52 shadow-xl">
            <div className="bg-brand-gold p-4 rounded-t-md text-white h-28">
              <p className="text-2xl font-bold">LEVEL 05</p>
              <p className="font-simibold text-lg">Planet:</p>
              <p className="italic">Gleaming Gold</p>
            </div>
            <div>
              <p className="p-4 h-80 bg-white">
                The final step in your astonishing techstronaut journey–
                completing Gleaming Gold. On this last planet, the ease you’ll
                have in creating an app will seem like true sorcery. As this
                become the last stop, you’ll learn you are the magic that keeps
                tech going.
              </p>
            </div>
            <div className="bg-brand-gold p-4 pt-2 rounded-b-md text-white h-24">
              <p className="font-simibold text-lg">App Inventor Badges:</p>
              <p>Beginner, Intermediate</p>
            </div>
          </div>
        </div>
      </Section>

      <div className="bg-brand-blue">
        <TextBanner title="What We Do">
          <Text className="mt-4 text-center" size="b1">
            Our mission is to create a collaborative network offering pathways
            to economic prosperity for youth, young adults, and women of color
            in underserved communities by providing the opportunity to learn the
            technical skills that will create a pipeline of future-ready STEM
            professionals with the ability to create generational wealth.
            <span className="block pt-4 italic text-gray-400">
              We Code KC is fiscally funded by Learn Techquity, a 501c3
              organization.
            </span>
            <span className="block italic text-gray-400">EIN: 83-3413497</span>
          </Text>
        </TextBanner>
      </div>

      <Section>
        <div className="px-10 py-10 grid place-items-center gap-10 md:grid-cols-3">
          <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 ">
            <div>
              <img
                className="h-60 w-60"
                src="https://source.unsplash.com/random/600x600/?tech"
                alt=""
              />
            </div>
            <div className="py-4 px-4 grid place-items-center">
              <Button>Donate</Button>
            </div>
          </div>

          <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500">
            <div>
              <img
                className="h-60 w-60"
                src="https://source.unsplash.com/random/600x600/?coding"
                alt=""
              />
            </div>
            <div className="py-4 px-4 grid place-items-center">
              <Button>Get Involved</Button>
            </div>
          </div>

          <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500">
            <div>
              <img
                className="h-60 w-60"
                src="https://source.unsplash.com/random/600x600/?hackathon"
                alt=""
              />
            </div>
            <div className="py-4 px-4 grid place-items-center">
              <Button>Learn to Code</Button>
            </div>
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

      <Section>
        <div className="flex flex-wrap align-center justify-center  gap-12 my-12">
          <div>
            <img
              className="w-48"
              src="/images/1597745175.jpg"
              alt="Microsoft"
            ></img>
          </div>
          <div>
            <img
              className="w-48"
              src="/images/1597745275.png"
              alt="Community Builders of Kansas City"
            ></img>
          </div>
          <div>
            <img
              className="w-48"
              src="/images/1597745457.png"
              alt="Fishtech Group"
            ></img>
          </div>
          <div>
            <img
              className=" w-48"
              src="/images/1597745663.png"
              alt="Artisan Technology Group"
            ></img>
          </div>
          <div>
            <img
              className="w-48"
              src="/images/1597745834.png"
              alt="Initiatives"
            ></img>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
