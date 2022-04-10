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
            Virtual Reality, Machine Learning, NFTs, and more!
          </Text>
          <br />
          <Button>Get Started</Button>
        </>
      </Hero>

      <Section>
        <img className={styles.image2} src="/images/techstronaut-journey.png" />
        <Column>
          <Text className="px-10 py-4 text-black" size="h1">
            Get into tech
          </Text>
          <Text className="px-10 py-4" size="b1">
            Aligned with We Code’s mission of empowering youth with technology
            and leadership skills– Techstronauts (Technology Astronauts) will
            embark on an important journey through the coding universe.
            Techstronauts embody the values of perseverance, knowledge, and
            strength as they venture from planet to planet to complete the
            coding levels. Upon completion of a level on a planet, they receive
            a badge to signify their advancement to the next level. Each badge
            represents an item that helps motivate them through their journey.
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
            href="https://docs.google.com/forms/d/e/1FAIpQLSfEejRmMTPP4yyRjCGAmVEdaOVVzGL9Rc-ECoK23RI-PzMb1w/viewform"
          >
             Join Techstronauts
          </Button>
        </Column>
      </Section>
      <Section>
        <img className={styles.image2} src="/images/wecode_careers.jpeg" />
        <Column>
          <Text className="px-10 py-4 text-black" size="h1">
            Get into tech
          </Text>
          <Text className="px-10 py-4" size="b1">
            In partnership with the State of Missouri Workforce Department, We
            Code is excited to bring a free certification program to Missouri
            residents. We are dedicated to providing quality coding and
            technology education and experience to participants with free access
            to the Coursea platform. In a self pace program you will be able to
            take your future in your own hands.
          </Text>
          <Text className="px-10 py-4" size="b1">
            If you are between the ages of 16 - 35 and are interested starting a
            career in tech. Please complete the sign-up form below and one of
            our representatives will be in touch with you within 48 hours.
            Thanks and we look forward to having you volunteer for us!
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
