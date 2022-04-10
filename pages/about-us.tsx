import Link from "next/link";
import { Button } from "../components/Button";
import { Hero } from "../components/Hero";
import Text from "../components/Text";
import styles from "../styles/About.module.scss";

const AboutPage = () => {
  return (
    <div className="mx-auto">
      <Hero title="About Us">
        <>
          <Text size="b1">
            Our mission is to give youth the opportunity to learn technology
            concepts, and leadership skills; creating a pipeline of future-ready
            professionals through project-based learning and innovative
            programs.
          </Text>
          <br />
          <Text size="b1">
            We're an initiative that serves the urban core of Kansas City,
            exposing youth to various computer science concepts.
            <br />
            <br />
            Every child, no matter their zip code or their family\’s financial
            status, should have the opportunity to learn to code.
          </Text>
          <Button className="mt-8" href="https://docs.google.com/forms/d/e/1FAIpQLSdYfOQ_31AsFUE9HKPkI45diPVndUdWah8eH8eep90HiON9qA/viewform">
            Join Our Team
          </Button>
        </>
      </Hero>
      {/* <div className={styles.cardContainer}>
        <img className={styles.image} src="/images/mentor-kid.jpeg" />
        <img className={styles.image} src="/images/wecode_team.jpeg" />
        <img className={styles.image} src="/images/boys_computer.png" />
      </div> */}
    </div>
  );
};

export default AboutPage;
