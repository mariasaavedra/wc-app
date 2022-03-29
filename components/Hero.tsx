import { MaybeParentComponentProps } from "../interfaces/ParentComponentProps";
import styles from "../styles/components/Hero.module.scss";
import Text from './Text';

interface HeroProps extends MaybeParentComponentProps {

}

export const Hero = (props: HeroProps) => {
  return (
    <div className={styles.hero}>
      <div className={styles.innerWrapper}>
          <Text size="h1">{props.children}</Text>
      </div>
    </div>
  );
};
