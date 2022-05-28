import type { NextPage } from "next";
import { Button } from "../components/Button";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import Text from "../components/Text";

const Events: NextPage = (props) => {
  return (
    <div className="mx-auto">
      <Hero title="Events">
        <>
          <Text size="b1">
            Develop your tech skills in one of our many courses below. <br />
            <br />
            WeCode/KC is committed to helping Kansas City's youth and young
            adults develop their skills and knowledge to prepare for a career in
            technology. Our classes and clubs below are designed for various age
            groups and skill levels.
            <br />
            <br />
            Our adult programs include wrap-around services and mentorships with
            professionals and business owners to further assist in the
            full-scope of skill-building and knowledge development that is
            needed for a career in the field of technology
            <br />
            <br />
            <strong>Sign up and Begin Your Tech Journey with Us!</strong>
          </Text>
          <br />
          <Button href="#get-into-tech">Get Started</Button>
        </>
      </Hero>
    </div>
  );
};

export default Events;
