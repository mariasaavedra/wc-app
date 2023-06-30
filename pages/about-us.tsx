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
      <div className="mx-auto py-8">
        <Button
            className='mx-auto'
            href='https://docs.google.com/forms/d/e/1FAIpQLSeGW0hbDEaTVQrZ9wPZ2wBAUfe8I3-2wNrb-sAPmaTcdcw5RQ/viewform'
          >
          Submit Testimonial
        </Button>
      </div>

      <TextBanner title="OUR TEAM"></TextBanner>

      <div className="content-container">
        <div className="md:flex m-10 pb-4  even:flex-row-reverse">
          <div className="mx-auto md:w-[440px]  shadow-xl ">
            <img className="w-full" src="/images/tammy-buckner.jpeg" />
          </div>
          <div className="w-16">
            {/* Used to imitate padding on flex-row-reverse best I could find to keep aligned onreverse */}
          </div>
          <div className="w-full shadow-xl border-2 border-gray-100 p-8">
            <Text className="p-4 text-black " size="h1">
              Tammy Buckner <span className="text-gray-500">|</span> Founder &
              CEO
            </Text>
            <Text className="pb-4 px-4 text-gray-500" size="b1">
              Tammy Buckner is the Founder & CTO of Techquity Digital LLC, a
              minority and women-owned technology solutions company specializing
              in innovative software & application development, Dev/Ops &
              business analytics to automate and improve business processes. As
              a successful serial entrepreneur, she also co-founded WeCode KC as
              a means to share her considerable educational and technology
              experience with young people in underrepresented communities.
              Tammy maintains strong connections with educators, business
              owners, schools, and community centers to provide conferences,
              community tech events, and facilitate workshops.
            </Text>
          </div>
        </div>

        <div className="md:flex m-10 py-4 even:flex-row-reverse">
          <div className="mx-auto md:w-[440px] shadow-xl">
            <img className="w-full h-full" src="/images/nicole-urban.jpg" />
          </div>
          <div className="w-16">
            {/* Used to imitate padding on flex-row-reverse best I could find to keep aligned onreverse */}
          </div>
          <div className="w-full shadow-xl border-2 border-gray-100 p-8">
            <Text className="p-4 text-black " size="h1">
              Nicole Urban <span className="text-gray-500">|</span> Program Director
            </Text>
            <Text className="pb-4 px-4 text-gray-500" size="b1">
            Nicole Urban, PMP, MBA, CSPO brings over 25 years of project management experience from the utility, 
            construction  and IT industries.  Nicole has been part of the WeCode program since November 2018, 
            first serving as a volunteer project manager and program coordinator before advancing to her current 
            role as the Program Director.  As a supporter of all things tech and a strong advocate for tech education for youth, 
            Nicole leads by example by holding her Professional Project Management certification through the Project Management Institute, 
            a Masters of Business Administration degree from Rasmussen University, and a Certified Scrum Product Owner certification through Scrum Alliance. 
            Nicole is committed to ensuring the strategies for all of WeCode's programs and initiatives are developed, implemented, executed for the achievement of our organizational goals. 
            In her spare time, Nicole is also a serial entrepreneur and owner of 3 small businesses.
            </Text>
          </div>
        </div>

        <div className="md:flex m-10 py-4 even:flex-row-reverse">
          <div className="mx-auto md:w-[440px] shadow-xl">
            <img className="w-full h-full" src="/images/adrienne.jpg" />
          </div>
          <div className="w-16">
            {/* Used to imitate padding on flex-row-reverse best I could find to keep aligned onreverse */}
          </div>
          <div className="w-full shadow-xl border-2 border-gray-100 p-8">
            <Text className="p-4 text-black " size="h1">
              Adrienne Story <span className="text-gray-500">|</span> Executive Administrative Assistant
            </Text>
            <Text className="pb-4 px-4 text-gray-500" size="b1">
            Adrienne is a professional Executive Administrative Coordination Manager with over 11 years of experience in customer service, C-Level Executive support, 
            and HR coordination. Her people-focused attitude paired with her strong relational skills help create and sustain positive client relations. 
            </Text>
          </div>
        </div>

        <div className="md:flex m-10 py-4 even:flex-row-reverse">
          <div className="mx-auto md:w-[440px] shadow-xl">
            <img className="w-full h-full" src="/images/ben.jpg" />
          </div>
          <div className="w-16">
            {/* Used to imitate padding on flex-row-reverse best I could find to keep aligned onreverse */}
          </div>
          <div className="w-full shadow-xl border-2 border-gray-100 p-8">
            <Text className="p-4 text-black " size="h1">
              Ben Richardson <span className="text-gray-500">|</span> Program Director
            </Text>
            <Text className="pb-4 px-4 text-gray-500" size="b1">
            Ben is an engineer and entrepreneur with 16 years as a business owner, 
            13 years in the electrical utility industry, and 5 years in STEAM education. 
            He graduated from Prairie View A&M University with a Bachelor of Science degree in 
            Electrical Engineering and from Park University with a Master of Business Administration degree 
            with a focus on Computer Network & Security. His analytical and problem-solving skills are transferable 
            amongst and variety of fields of knowledge from music to coding. He is coined as being a modern-day renaissance man.
            </Text>
          </div>
        </div>

        <div className="md:flex m-10 py-4 even:flex-row-reverse">
          <div className="mx-auto md:w-[440px] shadow-xl">
            <img className="w-full h-full" src="/images/claudehawkins.jpg" />
          </div>
          <div className="w-16">
            {/* Used to imitate padding on flex-row-reverse best I could find to keep aligned onreverse */}
          </div>
          <div className="w-full shadow-xl border-2 border-gray-100 p-8">
            <Text className="p-4 text-black " size="h1">
              Claude Hawkins <span className="text-gray-500">|</span> IT/Asset Manager
            </Text>
            <Text className="pb-4 px-4 text-gray-500" size="b1">
            Claude Hawkins is a seasoned IT asset management professional with a proven track record of optimizing IT assets for efficiency and cost-effectiveness. He excels in the complete lifecycle management of assets, from procurement to retirement. Claude's expertise lies in developing strategies aligned with organizational goals, negotiating vendor contracts, and ensuring compliance with licensing agreements. He leverages data analysis and industry trends to make informed technology investment decisions. Claude's proficiency in asset management tools, strong communication skills, and commitment to continuous learning make him a valuable asset for enhancing IT infrastructure and driving organizational growth.
            </Text>
          </div>
        </div>



        <TextBanner title="OUR BOARD"></TextBanner>
        <div className="flex flex-wrap pb-20 justify-center">
          <div className="w-72 h-72 m-3 mb-10 shadow-xl  p-4 bg-white">
            <div>
              <img className=" border-black border" src="/images/kimbryant.jpg" />
            </div>
            <div className="w-full ">
              <Text className="p-2 pt-6  text-black text-center" size="b2">
              Kimberly Bryant<span className="text-gray-500"> | </span>Interim Board Chair
              </Text>
            </div>
          </div>

          <div className="w-72 h-72 m-3 mb-10 shadow-xl  p-4 bg-white">
            <div>
              <img className=" border-black border" src="/images/brandoncalloway.jpg" />
            </div>
            <div className="w-full ">
              <Text className="p-2 pt-6 text-black text-center " size="b2">
              Brandon Calloway<span className="text-gray-500"> | </span> Board Member
              </Text>
            </div>
          </div>

          <div className=" w-72 h-72 m-3 mb-10 shadow-xl  p-4 bg-white">
            <div>
              <img className=" border-black border" src="/images/davidmitchell.jpg" />
            </div>
            <div className="w-full ">
              <Text className="p-2 pt-6 text-black text-center " size="b2">
              David Mitchell<span className="text-gray-500"> | </span> Board Member
              </Text>
            </div>
          </div>

          <div className="w-72 h-72 m-3 mb-10 shadow-xl  p-4 bg-white">
            <div>
              <img className=" border-black border" src="/images/angeliquenedved.jpg" />
            </div>
            <div className="w-full ">
              <Text className="p-2 pt-6 text-black text-center " size="b2">
              Angelique Nedved<span className="text-gray-500"> | </span> Board Member
              </Text>
            </div>
          </div>

          <div className="w-72 h-72 m-3 mb-10 shadow-xl  p-4 bg-white">
            <div>
              <img className=" border-black border" src="/images/aprilboyd.jpg" />
            </div>
            <div className="w-full ">
              <Text className="p-2 pt-6 text-black text-center " size="b2">
              April Boyd-Noronha<span className="text-gray-500"> | </span> Board Member
              </Text>
            </div>
          </div>

          <div className="w-72 h-72 m-3 mb-10 shadow-xl  p-4 bg-white">
            <div>
              <img className=" border-black border" src="/images/ryanreed.jpg" />
            </div>
            <div className="w-full ">
              <Text className="p-2 pt-6 text-black text-center " size="b2">
              Ryan Reed<span className="text-gray-500"> | </span> Board Member
              </Text>
            </div>
          </div>

          <div className="w-72 h-72 m-3 mb-10 shadow-xl  p-4 bg-white">
            <div>
              <img className=" border-black border" src="/images/robrogers.jpg" />
            </div>
            <div className="w-full ">
              <Text className="p-2 pt-6 text-black text-center " size="b2">
              Robert Rogers<span className="text-gray-500"> | </span> Board Member
              </Text>
            </div>
          </div>
      
          <div className="w-72 h-72 m-3 mb-10 shadow-xl  p-4 bg-white">
            <div>
              <img className=" border-black border" src="/images/rochellewalker.jpg" />
            </div>
            <div className="w-full ">
              <Text className="p-2 pt-6 text-black text-center " size="b2">
              Rochelle Walker<span className="text-gray-500"> | </span> Board Member
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
