import { MaybeParentComponentProps } from "../interfaces/ParentComponentProps";
import styles from "../styles/components/Button.module.scss";

interface ButtonProps extends MaybeParentComponentProps {
  children?: any;
}

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button
        type="button"
        className={
          styles.ButtonComponent +
          " " +
          props.className +
          " block py-2 px-4 text-white border-b-2"
        }
      >
        {props.children}
      </button>
    </div>
  );
};
