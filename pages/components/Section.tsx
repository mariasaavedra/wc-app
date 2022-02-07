import styles from "../../styles/Section.module.css";
interface SectionProps {
  children: any;
  grid: number;
}

export const getClasses = (): string => {
  const classes = [styles.ResponsiveBlockComponent];
  return classes.join(" ");
};

export const Section = (props: SectionProps) => {
  return (
    <div className={styles.section + " grid grid-flow-col"}>
      {props.children}
    </div>
  );
};

Section.defaultProps = {
  grid: 1,
};
