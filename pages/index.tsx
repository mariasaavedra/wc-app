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
import courseraStyles from "../styles/courseraCard.module.scss";
import { Key } from "react";
import EventCard from "../components/EventCard";

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
    { /* <Hero title="Creating a pipeline of future-ready professionals.">
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
      </Hero> */}

      <div className="bg-brand-purple mt-10">
        <TextBanner title="Learn to Code, Code to Learn">
          <Text className="mt-4 text-center w-100 mx-auto" size="b1">
            Our Techstronauts Coding Club is designed for students age 7 - 17
            {/* WeCodeKC introduces coding for kids through project-based or game
            development learning. Our students gradually increase their
            skill levels to writing their own code in JavaScript and Python.
            WeCodeKC also introduces various other technology concepts including
            Virtual Reality, Machine Learning and more! */}
          </Text>
          <Button
            className="d-block  mt-4 mb-0 mx-auto"
            href="https://www.eventbrite.com/e/spring-into-code-with-wecode-kc-build-it-play-it-gaming-for-the-future-tickets-523108841627?aff=erelexpmlt"
          >
            Spring Into Code
          </Button>
        </TextBanner>
      </div>

      <Section >
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
     
      <div className=" mt-10">
        <TextBanner title="(Re)Start a Career in Tech">
          <Text className="mt-4 text-center w-100 mx-auto" size="b1">
          Join our next adult cohort to start or pivot to a career in tech
          </Text>
          <Button
            className="d-block  my-4 mx-auto"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc9K2MrAHVBio53bzpPLu-lf9t3Su0Huidp6SHgm-wkwWBANw/viewform"
          >
            Get Into Tech
          </Button>
        </TextBanner>
      </div>
    <div className='flex flex-wrap align-center justify-center gap-5 mt-2'>
      <a href="https://www.coursera.org/programs/wecode-careers-peeum?collectionId=HwALj&currentTab=CATALOG&productId=child~L8zv1y16EeiOGQoLfyCjcg&productType=s12n&showMiniModal=true" target="_blank">
        <div className={courseraStyles.courseraCard + " mt-10 lg:mt-0"}>
            <div className={courseraStyles.courseraCardImg}>
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/14/b2d530f1ad11e7ab380fc0c6c817a8/Search-Thumbnail.jpg?auto=format%2Ccompress&dpr=1"/>
            </div>
            <div className={courseraStyles.box + " " + courseraStyles.clip}></div>
            <div className={courseraStyles.box + " " + courseraStyles.stackTop} >
                <span className={courseraStyles.companyLogo}>
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&dpr=1&w=72&h=72" alt="Google"/>
                </span>
                <div className={courseraStyles.courseraCardHeader + " pl-3 pr-3"}>Google IT Support</div>
                <p className="pl-3 pt-2">Google</p>
                <p className={courseraStyles.courseraCardFooter + " p-3"}>PROFESSIONAL CERTIFICATE</p>
            </div>
        </div>
      </a>

      <a href="https://www.coursera.org/programs/wecode-careers-peeum?collectionId=HwALj&currentTab=CATALOG&productId=fq9UWMbTEeqpthJ2RmWGow&productType=s12n&showMiniModal=true" target="_blank">
        <div className={courseraStyles.courseraCard + " mt-10 lg:mt-0"}>
            <div className={courseraStyles.courseraCardImg}>
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/8a/f7f459f9674408947edb8e594a5da3/1200x600_PgM.png?auto=format%2Ccompress&dpr=1"/>
            </div>
            <div className={courseraStyles.box + " " + courseraStyles.clip}></div>
            <div className={courseraStyles.box + " " + courseraStyles.stackTop} >
                <span className={courseraStyles.companyLogo}>
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&dpr=1&w=72&h=72" alt="Google"/>
                </span>
                <div className={courseraStyles.courseraCardHeader + " pl-3 pr-3"}>Google Project Management:</div>
                <p className="pl-3 pt-2">Google</p>
                <p className={courseraStyles.courseraCardFooter + " p-3"}>PROFESSIONAL CERTIFICATE</p>
            </div>
        </div>
      </a>

      <a href="https://www.coursera.org/programs/wecode-careers-peeum?collectionId=HwALj&currentTab=CATALOG&productId=XbrUuL9AEeyRUA73PlX3yQ&productType=s12n&showMiniModal=true" target="_blank">
        <div className={courseraStyles.courseraCard + " mt-10 lg:mt-0"}>
            <div className={courseraStyles.courseraCardImg}>
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/1e/d2f5a0dc494722980faf74d9fa8fc8/Back-end-dev-ProCert.jpg?auto=format%2Ccompress&dpr=1"/>
            </div>
            <div className={courseraStyles.box + " " + courseraStyles.clip}></div>
            <div className={courseraStyles.box + " " + courseraStyles.stackTop} >
                <span className={courseraStyles.companyLogo + " bg-white"}>
                    <img className="bg-white" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/73/e03b13a8e44df9b19eb279e5506396/360-x-360.png?auto=format%2Ccompress&dpr=1&w=72&h=72" alt="Meta"/>
                </span>

                <div className={courseraStyles.courseraCardHeader + " pl-3 pr-3"}>Meta Back-End Developer</div>
                <p className="pl-3 pt-2">Meta</p>
                <p className={courseraStyles.courseraCardFooter + " p-3"}>PROFESSIONAL CERTIFICATE</p>
            </div>
        </div>
      </a>

      <a href="https://www.coursera.org/programs/wecode-careers-peeum?collectionId=HwALj&currentTab=CATALOG&productId=KPSzVL9AEeyfhAreTccY9Q&productType=s12n&showMiniModal=true" target="_blank">
        <div className={courseraStyles.courseraCard  + " mt-10 lg:mt-0"}>
            <div className={courseraStyles.courseraCardImg}>
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ed/d25c0d25114924a34754928dbf8273/Front-end-dev-ProCert.png?auto=format%2Ccompress&dpr=1"/>
            </div>
            <div className={courseraStyles.box + " " + courseraStyles.clip}></div>
            <div className={courseraStyles.box + " " + courseraStyles.stackTop} >
                <span className={courseraStyles.companyLogo}>
                    <img className='bg-white' src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/73/e03b13a8e44df9b19eb279e5506396/360-x-360.png?auto=format%2Ccompress&dpr=1&w=72&h=72" alt="Meta"/>
                </span>
                <div className={courseraStyles.courseraCardHeader + " pl-3 pr-3"}>Meta Front-End Developer</div>
                <p className="pl-3 pt-2">Meta</p>
                <p className={courseraStyles.courseraCardFooter + " p-3"}>PROFESSIONAL CERTIFICATE</p>
            </div>
        </div>
      </a>

      <a href="https://www.coursera.org/programs/wecode-careers-peeum?collectionId=HwALj&currentTab=CATALOG&productId=pofy9I8EEeqAihIVddil_w&productType=s12n&showMiniModal=true" target="_blank">
        <div className={courseraStyles.courseraCard + " mt-10 lg:mt-0"}>
            <div className={courseraStyles.courseraCardImg}>
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/67/6a8a23c93d424fa3a39138428681f3/Professional_Certificate_-_IBM_Cybersecurity_Analyst.png?auto=format%2Ccompress&dpr=1"/>
            </div>
            <div className={courseraStyles.box + " " + courseraStyles.clip}></div>
            <div className={courseraStyles.box + " " + courseraStyles.stackTop} >
                <span className={courseraStyles.companyLogo}>
                    <img className="bg-white" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/58/a71c3f9f7342cd862014a6b2d50899/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=1&w=72&h=72" alt="IBM"/>
                </span>
                <div className={courseraStyles.courseraCardHeader + " pl-3 pr-3"}>IBM Cybersecurity Analyst</div>
                <p className="pl-3 pt-2">IBM</p>
                <p className={courseraStyles.courseraCardFooter + " p-3"}>PROFESSIONAL CERTIFICATE</p>
            </div>
        </div>
      </a>
    </div>

    <div className="py-14">
      <Carousel size={['lg']} pagination={["dots"]} slides={slides}></Carousel>
    </div>

    </div>
  );
};

export default Home;
