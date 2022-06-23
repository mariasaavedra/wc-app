import Link from "next/link";
import { Button } from "../components/Button";
import { Column } from "../components/Column";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import Text from "../components/Text";
import styles from "../styles/Program.module.scss";

const ProgramsPage = () => {
  return (
    <div className="mx-auto">
      <Hero title="Programs">
        <>
          <Text size="b1">
            WeCodeKC introduces coding for kids through project-based or game
            development learning. <br />
            <br />
            Our students begin their tech journey using Scratch, which is
            block-based coding, and gradually increase their skill levels to
            writing their own code in JavaScript and Python.
            <br />
            <br />
            WeCodeKC also introduces various other technology concepts including
            Virtual Reality, Machine Learning, and more!
          </Text>
          <br />
          <Button href="#get-into-tech">Get Started</Button>
        </>
      </Hero>

      <Section>
        <div id="get-into-tech"></div>{" "}
        {/*Added to link to section from home-page.*/}
        <img className={styles.image2} src="/images/blob1.png" />
        <Column>
          <Text className="px-10 py-10 text-black" size="h1">
            Get your child into tech.
          </Text>
          <Text className="px-10 py-4" size="b1">
            By the time their journey across the coding universe is complete,
            they will have acquired many of the skills necessary to be
            successful in their real-life journey in this field. They will have
            also gained other skills and lessons that will be applicable
            throughout many other areas of their lives.
          </Text>
          <Button
            className="d-block  my-4 mx-auto"
            href="https://www.eventbrite.com/e/techstronauts-coding-club-by-wecode-kc-tickets-317392187577"
          >
            Join Techstronauts
          </Button>
        </Column>
      </Section>
      <Section>
        <img className={styles.image2} src="/images/blob.png" />
        <Column>
          <Text className="px-10 py-4 text-black" size="h1">
            Start your Career in tech
          </Text>
          <Text className="px-10 py-4" size="b1">
            In partnership with the State of Missouri Workforce Department, We
            Code is excited to bring a free certification program to Missouri
            residents.
          </Text>
          <Text className="px-10 py-4" size="b1">
            For people ages of 16 - 35 and that are interested starting a career
            in technology. Complete the form below and one of our
            representatives will be in touch with you within 48 hours. Thanks
            and we look forward to having you volunteer for us!
          </Text>
          <Button
            className="d-block  my-4 mx-auto"
            href="https://docs.google.com/forms/d/e/1FAIpQLScNJSLewdZK-agF5Jog7GXyv9sLmu_nd26zyNqfrhP6pZ2uBw/viewform"
          >
            Get Into Tech
          </Button>
        </Column>
      </Section>
    </div>
  );
};

export default ProgramsPage;
