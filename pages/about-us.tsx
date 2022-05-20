import Link from "next/link";
import { Button } from "../components/Button";
import { Hero } from "../components/Hero";
import Text from "../components/Text";
import styles from "../styles/About.module.scss";
import Testimonials from "../components/Testimonials";

const TESTIMONIALS = [
  {
      name:'Danny Bailey',
      title:'Software Engineer',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
  },
  {
      name:'Lucy Carter',
      title:'Graphic Designer',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
  },
  {
      name:'Jade Bradley',
      title:'Dev Ops',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80'
  }
];

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

      <Testimonials testimonials={TESTIMONIALS} />

    </div>
  );
};

export default AboutPage;
