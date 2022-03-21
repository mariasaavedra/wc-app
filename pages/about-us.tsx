const AboutPage = () => {
  return (
    <div className="mx-auto">
       <div className="bg-brand-gold">
        <div className="flex flex-col justify-center py-8 px-8 text-justify lg:px-14">
        <h1 className="flex justify-center text-2xl pb-3.5 lg:text-5xl lg:pb-12 lg:pt-5">
          ABOUT US
        </h1>
          <p className="lg:pb-20 lg:px-40 lg:text-lg">
          Our mission is to give youth the opportunity to learn technology concepts, and leadership skills; creating a pipeline of future-ready professionals through project-based learning and innovative programs.
WE CODE KC is an initiative that serves the urban core of Kansas City, exposing youth to various programming languages, technology, cyber security, and computer science concepts. Learning the basic concept of coding develops creativity, problem solving skills, builds confidence and helps to build a positive future. Every child, no matter their zip code or their family’s financial status, should have the opportunity to learn to code.
          </p>
        </div>
    </div>
    <div className="cards-container columns-1 md:columns-2 pt-20 px-32 flex justify-around flex-col items-center lg:items-stretch lg:flex-row">
        <div className="card-container  pb-12  w-80 lg:w-96 flex flex-col">
          <img className="card-image mx-auto pb-5" src="https://source.unsplash.com/random/600x600/?hackathon"></img>
          <button className="card-button w-8/12 bg-brand-blue text-white mx-auto">OUR TEAM</button>
        </div>
        <div className="card-container w-80 lg:w-96 flex flex-col">
          <img className="card-image mx-auto pb-5" src="https://source.unsplash.com/random/600x600/?tech"></img>
          <button className="card-button w-8/12 bg-brand-blue text-white mx-auto">OUR BOARD</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
