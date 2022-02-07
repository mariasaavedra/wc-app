import styles from "../../styles/Section.module.css";
interface SectionProps {
  children?: any;
  size: number | string;
}


export const Column = (props: SectionProps) => {
  return (
    <div className={`col-span-${props.size}`}>
      {props.children}
    </div>
  );
};

Column.defaultProps = {
  size: 1,
};
