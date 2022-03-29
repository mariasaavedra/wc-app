import styles from "../styles/Hero.module.scss";

interface HeroProps {
  children?: any;
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
