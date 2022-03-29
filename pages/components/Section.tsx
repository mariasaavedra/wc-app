import styles from "../../styles/Section.module.css";
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

  return (
    <div className={getClasses()}>
      {props.children}
    </div>
  );
};

Section.defaultProps = {
  grid: 1,
};
