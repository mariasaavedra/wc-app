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

      <div className="mx-auto container my-4 pt-5  px-5 text-left">
        <div className="md:w-1/2 mx-auto text-center my-8">
          <h1 className="text-5xl text-center bold">Summer of Code</h1>

          <p className="my-4">
            Mon, Aug 1, 2022, 9:00 AM – Fri, Aug 5, 2022, 4:00 PM CDT
          </p>

          <p className="my-4">5008 Prospect Avenue Kansas City, MO 64130</p>

          <Text className="mt-4" size="b1">
            These classes are hands-on workshops that focus on teaching the
            beginner, intermediate, and advanced students the technology
            concepts shown above. Classes starts DAILY at 9am and end at 4pm.
            Lunch will be provided for each student.
          </Text>
          <Text size="b2" className="mt-4">
            <strong>Sign for Summer of Code classes below:</strong>
          </Text>
        </div>
      </div>
      <div className=" ml-8 mt-0 md:mx-auto container overflow-x-scroll grid grid-rows-1 grid-flow-col">
        <EventCard
          title="Build-a-Laptop"
          href="https://www.eventbrite.com/e/summer-of-code-with-wecode-kc-tickets-354095869277"
        >
          Students will learn how to build-a-laptop using special hardware and
          then will program it. Laptops will NOT be given to students upon
          completion of the class. Scholarships are available under special
          circumstances
        </EventCard>
        <EventCard
          title="Roblox"
          href="https://www.eventbrite.com/e/summer-of-code-with-wecode-kc-tickets-354095869277"
        >
          Students will create their own games in their own virtual studios.
          Scholarships are available under special circumstances for students.
        </EventCard>
        <EventCard
          title="Virtual Reality"
          href="https://www.eventbrite.com/e/summer-of-code-with-wecode-kc-tickets-354095869277"
        >
          Students will explore VR by programming a virtual environment using VR
          headsets. Students will NOT be given headsets upon completion.
          Scholarships are available to qualifying students.
        </EventCard>
        <EventCard
          title="Raspberry Pi Jam"
          href="https://www.eventbrite.com/e/summer-of-code-with-wecode-kc-tickets-354095869277"
        >
          Students will program Raspberry Pi hardware using the Python
          programming language. Students will NOT be given Raspberry Pi hardware
          upon completion. Scholarships are available to qualifying students.
        </EventCard>
        <EventCard
          title="Graphic Design"
          href="https://www.eventbrite.com/e/summer-of-code-with-wecode-kc-tickets-354095869277"
        >
          Students will develop professional graphics such as logos, banners,
          and more! Scholarships are available to qualifying students.
        </EventCard>
      </div>
    </div>
  );
};

export default Events;
