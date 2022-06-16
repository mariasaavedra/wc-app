import { MaybeParentComponentProps } from "../interfaces/ParentComponentProps";

export interface TestimonialItemProps extends MaybeParentComponentProps {
  index: number;
  image: string;
  name: string;
  title: string;
  testimonial: string;
}

const TestimonialItem = (props: TestimonialItemProps) => {
  return (
    <>
      <div
        className="snap-start w-full h-full flex items-center justify-center flex-shrink-0 "
        id={"slide-" + props.index}
      >
        <div className="bg-whiteshadow rounded-lg p-6 border-4">
          <div className="flex items-center space-x-6 mb-4">
            <img
              className="h-28 w-28 object-cover object-center rounded-full border-brand-blue shadow-brand-purple  shadow-sm"
              src={props.image}
            />
            <div>
              <p className="text-xl text-gray-800 font-normal mb-1">
                {props.name}
              </p>
              <p className="text-base text-brand-purple font-normal">
                {props.title}
              </p>
            </div>
          </div>
          <div>
            <p className="text-gray-700 leading-loose font-normal text-base">
              {props.testimonial}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

TestimonialItem.defaultProps = {
  image: "/images/anonymous-user.jpg"
};

export default TestimonialItem;
