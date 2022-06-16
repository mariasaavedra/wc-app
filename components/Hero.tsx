import { MaybeParentComponentProps } from "../interfaces/ParentComponentProps";

interface HeroProps extends MaybeParentComponentProps {
  content?: any;
  title?: any;
  imageUrl: string;
}

export const Hero = (props: HeroProps) => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto pt-0 pb-4 px-8">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-16 md:mt-28 mx-auto max-w-7xl  ">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900">
                {props?.title}
              </h1>
              <div className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {props.children}
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 -z-50 hidden lg:block ">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={props.imageUrl}
          alt=""
        />
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 -z-50 block md:block lg:hidden">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/images/programmer-male.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

Hero.defaultProps = {
  imageUrl: "/images/cpro.jpg",
};
export default Hero;
