import type { NextPage } from "next";
import { Column } from "./components/Column";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { ImageCard } from "./components/ImageCard";
import { Text } from "./components/Text";
import { Footer } from "./components/Footer";
import Image from 'next/image';
import Link from "next/link"

const ProgramsPage = () => {
  return (
    <div className="container mx-auto">

    <div className="bg-brand-gold">
      <Section >
        <Column>
          <Text>
          <h1 className="text-2xl font-bold my-4 uppercase">Programs</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </Text>
        </Column>
      </Section>
    </div>
    
    <Section>
        <div className="px-10 py-10  grid place-items-center gap-10 md:grid-cols-2  ">

          <div className="max-w-xs rounded-md   overflow-hidden shadow-lg hover:scale-105 transition duration-500 ">
            <div>
              <img className="h-60 w-60"src="https://source.unsplash.com/random/600x600/?tech" alt="" />
            </div>
            <div className="py-4 px-4 grid place-items-center ">
            <Link href="#">
              <div className="mt-4 w-4/5 grid place-items-center bg-brand-blue py-1 rounded cursor-pointer">
                <button className="font-bold text-white p-2">WE CODE FUTURES</button>
              </div>
            </Link>
            </div>
          </div>

          <div className="max-w-xs rounded-md   overflow-hidden shadow-lg hover:scale-105 transition duration-500 ">
            <div>
              <img className="h-60 w-60"src="https://source.unsplash.com/random/600x600/?coding" alt="" />
            </div>
            <div className="py-4 px-4 grid place-items-center ">
            <Link href="#">
              <div className="mt-4 w-4/5 grid place-items-center bg-brand-blue py-1 rounded cursor-pointer">
                <button className="font-bold text-white p-2">WE CODE CAREERS</button>
              </div>
            </Link>
            </div>
          </div>
 
        </div>
      </Section>
   
    <Section>
      <Footer></Footer>
    </Section>

    </div>
  );
};

export default ProgramsPage;
