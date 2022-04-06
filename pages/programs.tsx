import Link from "next/link";
import { Button } from "../components/Button";
import Text from '../components/Text';
import styles from '../styles/Program.module.scss'

const ProgramsPage = () => {
  return (
    <div className="mx-auto">
      <div>
        <div className={styles.headerContainer}>
          <Text className={styles.header} size="h1">
            PROGRAMS
          </Text>
          <Text className={styles.headerText1} size="b1">
          WeCodeKC introduces coding for kids through project-based 
          or game development learning. Our students begin their tech 
          journey using Scratch, which is block-based coding, 
          and gradually increase their skill levels to writing 
          their own code in JavaScript and Python.  
          WeCodeKC also introduces various other technology concepts 
          including Virtual Reality, Machine Learning, NFTs, and more!
          </Text>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <section className={styles.container1}>
          <img
              className={styles.image}
              src="http://localhost:3000/images/techstronaut-journey.png" />
          <div className={styles.container1content}>
            <Text className={styles.headerText1} size="b1">
              Aligned with We Code’s mission of empowering youth with technology 
              and leadership skills– Techstronauts (Technology Astronauts) 
              will embark on an important journey through the coding universe. 
              Techstronauts embody the values of perseverance, knowledge, 
              and strength as they venture from planet to planet to complete 
              the coding levels. Upon completion of a level on a planet, 
              they receive a badge to signify their advancement to the next 
              level. Each badge represents an item that helps motivate them 
              through their journey. 
            </Text>
            <Text className={styles.headerText2} size="b1">
              By the time their journey across the coding universe is complete, 
              they will have acquired many of the skills necessary to be 
              successful in their real-life journey in this field. 
              They will have also gained other skills and lessons that will be 
              applicable throughout many other areas of their lives. 
            </Text>    
            <a className={styles.programButton} href="https://docs.google.com/forms/d/e/1FAIpQLSfEejRmMTPP4yyRjCGAmVEdaOVVzGL9Rc-ECoK23RI-PzMb1w/viewform">
              JOIN TECHSTRONAUTS
            </a>  
          </div>    
        </section>
        <section className={styles.container2}>
          <img
              className={styles.image}
              src="/images/wecode_careers.jpeg" />
          <div>
            <Text className={styles.headerText1} size="b1">
              Aligned with We Code’s mission of empowering youth with technology 
              and leadership skills– Techstronauts (Technology Astronauts) 
              will embark on an important journey through the coding universe. 
              Techstronauts embody the values of perseverance, knowledge, 
              and strength as they venture from planet to planet to complete 
              the coding levels. Upon completion of a level on a planet, 
              they receive a badge to signify their advancement to the next 
              level. Each badge represents an item that helps motivate them 
              through their journey. 
            </Text>
            <Text className={styles.headerText2} size="b1">
              By the time their journey across the coding universe is complete, 
              they will have acquired many of the skills necessary to be 
              successful in their real-life journey in this field. 
              They will have also gained other skills and lessons that will be 
              applicable throughout many other areas of their lives. 
            </Text>    
            <a className={styles.programButton} href="https://docs.google.com/forms/d/e/1FAIpQLScNJSLewdZK-agF5Jog7GXyv9sLmu_nd26zyNqfrhP6pZ2uBw/viewform">
              GET INTO TECH
            </a>  
          </div>    
        </section>
      </div>
    </div>
  );
};

export default ProgramsPage;
