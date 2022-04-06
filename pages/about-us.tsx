import Link from "next/link";
import { Button } from "../components/Button";
import Text from '../components/Text';
import styles from '../styles/About.module.scss'

const AboutPage = () => {
  return (
    <div className="container mx-auto">
      <div>
        <div className={styles.headerContainer}>
          <Text className={styles.header} size="h1">
            ABOUT US  
          </Text>
          <Text className={styles.headerText1} size="b1">
            Our mission is to give youth the opportunity to learn technology
            concepts, and leadership skills; creating a pipeline of future-ready
            professionals through project-based learning and innovative
            programs. 
          </Text>
          <Text className={styles.headerText2} size="b1"> 
            WE CODE KC is an initiative that serves the urban core of
            Kansas City, exposing youth to various programming languages,
            technology, cyber security, and computer science concepts. Learning
            the basic concept of coding develops creativity, problem solving
            skills, builds confidence and helps to build a positive future.
            Every child, no matter their zip code or their family’s financial
            status, should have the opportunity to learn to code.
          </Text>
        </div>
      </div>
      <div className={styles.cardContainer}>
          <img
            className={styles.image}
            src="http://localhost:3000/images/mentor-kid.jpeg" />
          <img
            className={styles.image}
            src="http://localhost:3000/images/wecode_team.jpeg" />  
          <img
            className={styles.image}
            src="http://localhost:3000/images/boys_computer.png" />   
      </div>
      <div className={styles.buttoncontainer}>
        <a className={styles.aboutButton} href="https://docs.google.com/forms/d/e/1FAIpQLSdYfOQ_31AsFUE9HKPkI45diPVndUdWah8eH8eep90HiON9qA/viewform">
          JOIN OUR TEAM 
        </a>  
        {/* <Link href="">
          <button>JOIN OUR TEAM</button>
        </Link> */}
      </div>
    </div>
  );
};

export default AboutPage;
