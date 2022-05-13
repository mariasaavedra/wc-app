import type { NextPage } from "next";
import { Button } from "../components/Button";
import { Hero } from "../components/Hero";
import Text from "../components/Text";

const Events: NextPage = (props) => {
  return (
    <div className="mx-auto">
      <Hero title="Develop your tech skills in one of our many courses below!">
        <>
          <Text size="b1">
          WeCode/KC is committed to helping Kansas City's youth
          and young adults develop their skills and knowledge to
          prepare for a career in technology.  Our classes and
          clubs below are designed for various age groups and skill levels.
          </Text>
          <br />
          <Text size="b1">
          Our adult programs include wrap-around services and mentorships
          with professionals and business owners to further assist in the
          full-scope of skill-building and knowledge development that
          is needed for a career in the field of technology
          </Text>
          <br />
          <Text size='h4' className='text-black'>
          Sign up and Begin Your Tech Journey with Us!
          </Text>
          <Button
            className="mt-8"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdYfOQ_31AsFUE9HKPkI45diPVndUdWah8eH8eep90HiON9qA/viewform"
          >
            Join Our Team
          </Button>
        </>
      </Hero>
    </div>
  );
};

export default Events;
