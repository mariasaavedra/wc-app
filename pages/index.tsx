import type { NextPage } from "next";
import { Column } from "./components/Column";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { ImageCard } from "./components/ImageCard";
import { Text } from "./components/Text";
import { Footer } from "./components/Footer";
import Link from "next/link"
import styles from "../styles/Image.module.css";

const Home: NextPage = (props) => {

  return (
    <div className="container mx-auto">
      
      <div className="bg-brand-purple " >
        <div className="flex flex-wrap lg:flex-no-wrap  justify-between">
          <div className="">
              <img className="h-64" src="/images/wecodegirls.png"></img>
          </div>
          <div className=" ">
              <h1 className="text-4xl font-bold p-10">
                  <span className='block'>CODING A </span>
                  <span className='block'>PIPELINE OF </span>
                  <span className='block'>FUTURE-READY</span>
                  <span className='block'>PROFESSIONALS</span>
              </h1>
          </div>
        </div>
      </div>
      

     
      <Section>
        <div className="px-10 py-10  grid place-items-center gap-10 md:grid-cols-3  ">

          <div className="max-w-xs rounded-md   overflow-hidden shadow-lg hover:scale-105 transition duration-500 ">
            <div>
              <img className="h-60 w-60"src="https://source.unsplash.com/random/600x600/?tech" alt="" />
            </div>
            <div className="py-4 px-4 grid place-items-center ">
            <Link href="#">
              <div className="mt-4 w-4/5 grid place-items-center bg-brand-gold py-1 rounded cursor-pointer">
                <button className="font-bold text-white p-2">DONATE</button>
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
              <div className="mt-4 w-4/5 grid place-items-center bg-brand-gold py-1 rounded cursor-pointer">
                <button className="font-bold text-white p-2">GET INVOLVED</button>
              </div>
            </Link>
            </div>
          </div>

          <div className="max-w-xs rounded-md   overflow-hidden shadow-lg hover:scale-105 transition duration-500 ">
            <div>
              <img className="h-60 w-60"src="https://source.unsplash.com/random/600x600/?hackathon" alt="" />
            </div>
            <div className="py-4 px-4 grid place-items-center ">
            <Link href="#">
              <div className="mt-4 w-4/5 grid place-items-center bg-brand-gold py-1 rounded cursor-pointer">
                <button className="font-bold text-white p-2">LEARN TO CODE</button>
              </div>
            </Link>
            </div>
          </div>

        </div>
      </Section>

      <div className="bg-brand-blue">
        <Section>
          <Column>
            <Text className="bg-brank-gold">
              <h1 className="mb-4 text-2xl text-white font-bold">OUR WHY</h1>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Text>
          </Column>
        </Section>
      </div>

      <Section>
        <div className="flex flex-wrap align-center justify-center gap-2">
          <div className="max-h-24 h-24 w-64 bg-blue-100">

          </div>
          <div className="h-24 w-64 bg-blue-100">

          </div>
          <div className="h-24 w-64 bg-blue-100">

          </div>
          <div className="h-24 w-64 bg-blue-100">

          </div> 
          <div className="h-24 w-64 bg-blue-100">

          </div>
          <div className="h-24 w-64 bg-blue-100">

          </div>
          <div className="h-24 w-64 bg-blue-100">

          </div>
          <div className="h-24 w-64 bg-blue-100">

          </div>  
        </div>
      </Section>

      <Section>
        <Footer></Footer>
      </Section>
    </div>
  );
};

export default Home;
