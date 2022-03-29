import { Column } from "./Column";
import { Section } from "./Section";
import styles from '../styles/ImageCard.module.scss'

interface ImageProps {
  imageUrl?: string;
  children?: any;
  imagePosition: "left" | "right";
}
export const ImageCard = (props: ImageProps) => {
  return (
    <div className={styles.imageCard}>
      <div style={{ background: "blue" }}></div>
    </div>
  );
};

ImageCard.defaultProps = {
  imagePosition: "left",
};
