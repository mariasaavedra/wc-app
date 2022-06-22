import { MaybeParentComponentProps } from "../interfaces/ParentComponentProps";
import styles from "../styles/components/Badge.module.scss";

export interface BadgeProps extends MaybeParentComponentProps {
  planet: string;
  level: string;
  label: string;
  color: string;
}

export default function Badge(props: BadgeProps) {
  return (
    <div className={styles.BadgeComponent + " " + "bg-brand-magenta"}>

      <p>{props.children}</p>
      <p className="font-bold">Planet: {props.planet}</p>
      <p className={styles.level}>{props.level}</p>
      <p className={styles.label}>{props.label}</p>
      {/* <div className={styles.color}></div> */}
    </div>
  );
}

Badge.defaultProps = {
  planet: "Magic Magenta",
  level: "01",
  label: "Scratch",
  color: "#000",
};
