import type { NextPage } from "next";
import Hero from "../components/Hero";
import Text from "../components/Text";
import EventCard from "../components/EventCard";

const Events: NextPage = () => {
  return (
    <div className="mx-auto">
      <Hero title="Events">
        <>
          <h2>Develop your tech skills in one of our many courses below</h2>
          <br />
          <Text size="b1" className="mt-2">
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
          </Text>
          <br />
          {/* <Button href="/programs">Get Started</Button> */}
        </>
      </Hero>

      <div className="mx-auto container my-4 py-5  px-5 text-left">
        <div className="w-2/3">
          <Text size="h3" className="mt-2">
            Summer of Code
          </Text>

          <Text size="h4" className="mt-2">
            <small>
              Mon, Aug 1, 2022, 9:00 AM – Fri, Aug 5, 2022, 4:00 PM CDT
            </small>
          </Text>

          <Text size="h4" className="mt-2">
            <small>5008 Prospect Avenue Kansas City, MO 64130</small>
          </Text>
          <Text className="mt-4" size="b1">
            These classes are hands-on workshops that focus on teaching the
            beginner, intermediate, and advanced students the technology
            concepts shown above. Classes starts DAILY at 9am and end at 4pm.
            Lunch will be provided for each student.
          </Text>
        </div>

        <br />
        <Text size="b2" className="mt-1">
          <strong>Sign for Summer of Code classes below:</strong>
        </Text>
      </div>
      <div className="mx-auto container">
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
          title="Graphic Design w/ NFTs"
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
