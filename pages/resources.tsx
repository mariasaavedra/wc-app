import { Hero } from "../components/Hero";
import Text from "../components/Text";
import ResourceCard from "../components/ResourceCard";

const ResourcesPage = () => {
  return (
    <div className="mx-auto">
      <Hero title="Resources">
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
        </>
      </Hero>

      <div className="pt-10 lg:pt-12 pb-10 lg:pb-12">
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

export default ResourcesPage;
