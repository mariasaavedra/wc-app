import { Button } from "../components/Button";
import { Column } from "../components/Column";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import Text from "../components/Text";
import styles from "../styles/Program.module.scss";
import ResourceCard from "../components/ResourceCard";
import TextBanner from "../components/TextBanner";

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
            href="https://docs.google.com/forms/d/e/1FAIpQLSc9K2MrAHVBio53bzpPLu-lf9t3Su0Huidp6SHgm-wkwWBANw/viewform"
          >
            Get Into Tech
          </Button>
        </Column>
      </Section>
      <TextBanner title="Resources" />
      <div className="pt-10 pb-10 ">

        <div className="container mx-auto">
            <div className="flex flex-wrap mx-4 items-stretch justify-center gap-6">
                <ResourceCard
                    title="Effective, engaging and enjoyable coding education"
                    url="images\edison.png"
                    href="https://meetedison.com"
                >
                Edison is a robust educational robot designed to bring coding to life for students and help teachers deliver meaningful 21st century education.
                </ResourceCard>
                <ResourceCard
                    title="Enter The Magical World of Coding"
                    url="images\codeillusion.png"
                    href="https://codeillusion.io/"
                >
                Disney Codeillusion makes learning to code easy, fun and absolutely magical.
                </ResourceCard>
                <ResourceCard
                    title="Enter The Magical World of Coding"
                    url="images\code.png"
                    href="https://code.org/"
                >
                Our Professional Learning program helps you teach computer science!
                </ResourceCard>
                <ResourceCard
                    title="Learn Roblox Studio"
                    url="images\roblox.png"
                    href="https://create.roblox.com/docs/tutorials"
                >
                The road to making your dream game starts here. Start developing games today with our step-by-step tutorials.
                </ResourceCard>
                <ResourceCard
                    title="Building A World-Class Computer Science Program"
                    url="images\codecombat.png"
                    href="https://codecombat.com/play/dungeon"
                >
                We Help Empower Educators and Inspire Students Across the Country
                </ResourceCard>
                <ResourceCard
                    title="Scratch is the world's largest free coding community for kids."
                    url="images\scratch.png"
                    href="https://https://scratch.mit.edu"
                >
                Scratch promotes computational thinking and problem solving skills; creative teaching and learning; self-expression and collaboration; and equity in computing.
                </ResourceCard>
                <ResourceCard
                    title="Codeanywhere is a Cloud IDE."
                    url="images\codeanywhere.png"
                    href="https://codeanywhere.com/signup"
                >
                With our amazing web-based code editor in Codeanywhere, you will forget you ever used any other code editor.
                </ResourceCard>

        </div>
      </div>
    </div>
    </div>
  );
};

export default ProgramsPage;
