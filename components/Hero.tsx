import { MaybeParentComponentProps } from "../interfaces/ParentComponentProps";

interface HeroProps extends MaybeParentComponentProps {
  content?: any;
  title?: any;
  imageUrl: string;
}

export const Hero = (props: HeroProps) => {
  return (
    <div className="relative bg-white overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="min-h-screen hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-28 mx-auto max-w-7xl  ">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900">
                {props?.title}
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {props.children}
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={props.imageUrl}
          alt=""
        />
      </div>
    </div>
  );
};

Hero.defaultProps = {
  imageUrl: "/images/programmer-male.jpg",
};
export default Hero;
