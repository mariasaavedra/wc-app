import { MaybeParentComponentProps } from "../interfaces/ParentComponentProps";
import styles from "../styles/components/Hero.module.scss";

interface HeroProps extends MaybeParentComponentProps {

}

export const Hero = (props: HeroProps) => {
  return (
    <div>
      <p className={styles.hero}>
          {props.children}
      </p>
    </div>
  );
};
