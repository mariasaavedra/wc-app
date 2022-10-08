import type { NextPage } from "next";
import Hero from "../components/Hero";
import Text from "../components/Text";
import EventCard from "../components/EventCard";

const Events: NextPage = () => {
  return (
    <div className="mx-auto">
      <div className="max-h-[70vh] overflow-hidden">
        <Hero title="Events">
          <>
            <h2 className="tracking-tight">
              Develop your tech skills in one of our many courses below
            </h2>
            <br />
            <Text size="b1" className="mt-2">
              WeCode/KC is committed to helping Kansas City's youth and young
              adults develop their skills and knowledge to prepare for a career
              in technology. Our classes and clubs below are designed for
              various age groups and skill levels.
              <br />
              Our adult programs include wrap-around services and mentorships
              with professionals and business owners to further assist in the
              full-scope of skill-building and knowledge development that is
              needed for a career in the field of technology
              <br />
            </Text>
          </>
        </Hero>
      </div>
      <div className="mx-auto mt-4 container md:flex">
        <EventCard
          title="DECONSTRUCTED | WeCode KC featuring Grammy award winning producer J. White"
          href="https://www.eventbrite.com/e/deconstructed-wecode-kc-featuring-grammy-award-winning-producer-j-white-registration-431488964107"
        >
          Students who attend this workshop will learn how to create a #1 Hit
          song with Grammy Award winning music producer and KC native J. White.
          He is the producer of several chart-topping tracks, including "Bodak
          Yellow", "I Like It", "Money" & more! Your student won't want to miss
          this INCREDIBLE opportunity.
        </EventCard>
        <EventCard
          title="Techstronauts Coding Club by WeCode KC!"
          href="https://www.eventbrite.com/e/techstronauts-coding-club-by-wecode-kc-tickets-387267386177"
        >
          W﻿eCode KC is collaborating with Cyber Creationz Tech to bring website
          design concepts to our Website Development students. Students who join
          the Website Development classes will be able to expand on building
          their web pages by understanding concepts related to domain names and
          launching an actual website onto the world wide web. If your student
          wants to build websites, they won't want to miss this class!
        </EventCard>
      </div>
    </div>
  );
};

export default Events;
