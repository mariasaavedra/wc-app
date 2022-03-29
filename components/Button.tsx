import styles from "../styles/Button.module.scss";

interface ButtonProps {
  children?: any;
}

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <p className={styles.ButtonComponent}>
          {props.children}
      </p>
    </div>
  );
};
