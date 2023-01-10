import Hero from "../components/Hero";
import Text from "../components/Text";
import { Button } from "../components/Button";

const BoardPage = () => {
  return (
    <div className="mx-auto mt-0">
      <Hero title="Our Team">
        <div className="pr-0 md:pr-20">
          <Text size="b1" className="mt-2 mb-8">
          Diversity is our #1 priority because we understand that creativity and a broader range 
          of skills are imperative to a great tech team.  Our volunteer and mentor teams are comprised 
          of individuals from various backgrounds and with varied skills.  We do this because we know 
          that every WeCode KC student will be able to envision a future where faces like theirs exist 
          and contribute to better a technological future.
          </Text>
          <Text size='h3'>
          We encourage those who wish to see a more diverse future in technology to join our team!
          </Text>

          <Button
            className="mt-8"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdYfOQ_31AsFUE9HKPkI45diPVndUdWah8eH8eep90HiON9qA/viewform"
          >
            Join Our Team
          </Button>
        </div>
      </Hero>
      <Text className="text-center pt-8" size='h1'>OUR TEAM</Text>

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

        <Text className="text-center" size='h1'>OUR BOARD</Text>
        <div className="flex flex-wrap pb-10 justify-center">
          <div className="m-5 shadow-xl  p-4 bg-white">
            <div>
              <img className="w-80 h-80 border-black border-2" src="/images/rob-rogers.jpeg" />
            </div>
            <div className="w-full ">
              <Text className="p-2 pt-6 text-black text-center " size="b2">
                Rob Rogers <span className="text-gray-500">|</span> Board Member
              </Text>
            </div>
          </div>

          <div className="m-5 shadow-xl  p-4 bg-white">
            <div>
              <img className="w-80 h-80 border-black border-2" src="/images/ryan-reed.jpeg" />
            </div>
            <div className="w-full ">
              <Text className="p-2 pt-6 text-black text-center " size="b2">
                Ryan Reed <span className="text-gray-500">|</span> Board Member
              </Text>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default BoardPage;
