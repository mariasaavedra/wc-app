import { useState } from "react";
import { MaybeParentComponentProps } from "../interfaces/ParentComponentProps";
import styles from "../styles/components/Carousel.module.scss";

type pagination = "dots" | "arrows";
export interface CarouselProps extends MaybeParentComponentProps {
  slides: Array<JSX.Element>;
  pagination: Array<pagination>;
}

export default function Carousel(props: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  /* Add arrows */
  const displayArrows = () => {
    return props.pagination.length > 0 && props.pagination.includes("dots");
  };
  const displayDots = () => {
    return props.pagination.length > 0 && props.pagination.includes("dots");
  };

  return (
    <div className={styles.CarouselComponent}>
      {/* Slides */}
      <div className="flex flex-col items-center m-8">
        <div className="w-100 bg-white rounded overflow-x-hidden flex snap-x">
          {props.slides.map((slide, index) => {
            return <div>{currentIndex === index && slide}</div>;
          })}
        </div>
      </div>

      {/* Pagination */}
      <div className={styles.dots}>
        {displayDots &&
          props.slides.map((slide, index) => (
            <div
              onClick={() => setCurrentIndex(index)}
              className={styles.dot}
            ></div>
          ))}
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  slides: [<p>Slide One</p>, <p>Slide Two</p>, <p>Slide Three</p>],
  pagination: ["dots"],
};
