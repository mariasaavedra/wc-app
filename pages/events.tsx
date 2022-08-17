import type { NextPage } from "next";
import Hero from "../components/Hero";
import Text from "../components/Text";
import EventCard from "../components/EventCard";

const Events: NextPage = () => {
  return (
    <div className="mx-auto">
      <Hero title="Events">
        <>
          <h2 className="tracking-tight">
            Develop your tech skills in one of our many courses below
          </h2>
          <br />
          <Text size="b1" className="mt-2">
            WeCode/KC is committed to helping Kansas City's youth and young
            adults develop their skills and knowledge to prepare for a career in
            technology. Our classes and clubs below are designed for various age
            groups and skill levels.
            <br />
            Our adult programs include wrap-around services and mentorships with
            professionals and business owners to further assist in the
            full-scope of skill-building and knowledge development that is
            needed for a career in the field of technology
            <br />
          </Text>
        </>
      </Hero>
    </div>
  );
};

export default Events;
