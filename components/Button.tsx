import styles from "../styles/components/Button.module.scss";

interface ButtonProps {
  children?: any;
}

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button
        type="button"
        className={
          styles.ButtonComponent + " block py-2 px-3 text-white border-b-1"
        }
      >
        {props.children}
      </button>
    </div>
  );
};
