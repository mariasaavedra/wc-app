import { useEffect, useState } from "react";
import { MaybeParentComponentProps } from "../interfaces/ParentComponentProps";
import styles from "../styles/components/Carousel.module.scss";

type pagination = "dots" | "arrows";
export interface CarouselProps extends MaybeParentComponentProps {
  slides: Array<JSX.Element>;
  pagination: Array<pagination>;
}

export default function Carousel(props: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const getClasses = (index: number): string => {
    const classes = [styles.dot];
    if (currentIndex === index) {
      classes.push(styles.active);
    }
    return classes.join(" ");
  };

  useEffect(() => {
    setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const totalSlides = props.slides.length - 1;
        if (prevIndex + 1 > totalSlides) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 5000);
  }, []);

  /* Add arrows */
  const displayArrows = (): boolean => {
    return props.pagination.length > 0 && props.pagination.includes("arrows");
  };
  const displayDots = (): boolean => {
    return props.pagination.length > 0 && props.pagination.includes("dots");
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      return;
    }
    setCurrentIndex((prevIndex) => {
      return prevIndex - 1;
    });
  };

  const nextSlide = () => {
    if (currentIndex === props.slides.length - 1) {
      return;
    }
    setCurrentIndex((prevIndex) => {
      return prevIndex + 1;
    });
  };

  return (
    <div className={styles.CarouselComponent}>
      {/* Left Arrow */}
      {displayArrows() && (
        <div className={styles.leftArrow} onClick={prevSlide}>
          {"<"}
        </div>
      )}

      {/* Slides */}
      <div className="flex flex-col items-center m-8">
        <div className="w-100 rounded overflow-x-hidden flex snap-x">
          {props.slides.map((slide, index) => {
            return <div>{currentIndex === index && slide}</div>;
          })}
        </div>
      </div>

      {/* Right Arrow */}
      {displayArrows() && (
        <div className={styles.rightArrow} onClick={nextSlide}>
          {">"}
        </div>
      )}

      {/* Pagination */}
      <div className={styles.dots}>
        {displayDots &&
          props.slides.map((slide, index) => (
            <div
              onClick={() => setCurrentIndex(index)}
              className={getClasses(index)}
            ></div>
          ))}
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  slides: [<p>Slide One</p>, <p>Slide Two</p>],
  pagination: ["dots"],
};
