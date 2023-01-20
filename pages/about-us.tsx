import Link from "next/link";
import { Button } from "../components/Button";
import { Hero } from "../components/Hero";
import Text from "../components/Text";
import {Section} from "../components/Section";
import Carousel from "../components/Carousel";
import TestimonialItem from "../components/TestimonialItem";
import TextBanner from "../components/TextBanner";
import TESTIMONIALS from "../constants/testimonials";

const slides = TESTIMONIALS.map((t, index) => {
  return (
    <TestimonialItem
      index={index}
      image={t.image}
      name={t.name}
      title={t.title}
      testimonial={t.testimonial}
    ></TestimonialItem>
  );
});

const AboutPage = () => {
  return (
    <div className="mx-auto">
      <Hero title="About Us">
        <>
          <Text size="b1">
            Our mission is to give youth the opportunity to learn technology
            concepts, and leadership skills; creating a pipeline of future-ready
            professionals through project-based learning and innovative
            programs.
          </Text>
          <br />
          <Text size="b1">
            We're an initiative that serves the urban core of Kansas City,
            exposing youth to various computer science concepts.
            <br />
            <br />
            Every child, no matter their zip code or their family’s financial
            status, should have the opportunity to learn to code.
          </Text>
          <Button
            className="mt-8"
            href="https://wecodekc.my.salesforce-sites.com/VolunteersSignup"
          >
            Join Our Team
          </Button>
        </>
      </Hero>
      <div className=" mt-10">
        <TextBanner title="Our Mission">
          <Text className="mt-4 text-center" size="b1">
            Our mission is to give youth the opportunity to learn technology
            concepts, and leadership skills. <br /> We're creating a pipeline of
            future-ready professionals through project-based learning and
            innovative programs.
          </Text>
        </TextBanner>
      </div>

      <TextBanner title="Testimonials"></TextBanner>

      <Carousel pagination={["dots"]} slides={slides}></Carousel>
      <Section>
        <Button
          className='mx-auto'
          href='https://docs.google.com/forms/d/e/1FAIpQLSeGW0hbDEaTVQrZ9wPZ2wBAUfe8I3-2wNrb-sAPmaTcdcw5RQ/viewform'
        >
        Submit Testimonial
        </Button>
      </Section>
    </div>
  );
};

export default AboutPage;
