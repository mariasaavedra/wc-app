import styles from "../styles/components/Section.module.scss";
interface SectionProps {
  children?: any;
  grid: number;
  gap?: string;
  display?: string;
}

export const Section = (props: SectionProps) => {
  const getClasses = (): string => {
    const classes = [`${styles.section}`];
    classes.push(`grid grid-flow-col`);
    if (props.gap) {
      classes.push(`gap-${props.gap}`);
    }
    return classes.join(" ");
  };

  return <div className={getClasses() + " " + "mx-auto container my-8"}>{props.children}</div>;
};

Section.defaultProps = {
  grid: 1,
};
