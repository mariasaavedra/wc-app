import { useRouter } from "next/router";
import { MaybeParentComponentProps } from "../interfaces/ParentComponentProps";
import styles from "../styles/components/Button.module.scss";

export interface ButtonProps extends MaybeParentComponentProps {
  href?: string;
  onClick?: Function;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
  size?: "tiny" | "small" | "medium" | "large";
  priority?: "primary" | "secondary" | "tertiary";
  className?: any;
}

/**
 * Standard element for presenting clickable actions to the user, either inline (via `onClick`) or as a destination (via `url`)
 */
export function Button(props: ButtonProps) {
  const router = useRouter();
  const isUrlAbsolute = (href: string) =>
    href.indexOf("://") > 0 || href.indexOf("//") === 0;

  const getTarget = () => {
    if (props.href) {
      if (isUrlAbsolute(props.href)) {
        return "_blank";
      } else {
        return "_self";
      }
    }
  };

  const getClasses = () => {
    if (props.size === "medium") {
      return "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xs text-white bg-brand-blue cursor-pointer hover:bg-indigo-700 md:py-4 md:text-lg md:px-10";
    } else if (props.size === "small") {
      return "w-full flex px-4 py-2 items-center justify-center border border-transparent text-base font-small rounded-xs text-white bg-brand-blue cursor-pointer hover:bg-indigo-700 cursor-pointer ";
    }
  };
  return (
    <div
      className={
        props.className +
        " " +
        styles.width +
        " cursor-pointer rounded-md shadow"
      }
    >
      <a href={props.href} target={getTarget()} className={getClasses()}>
        {props.children}
      </a>
    </div>
  );
}

Button.defaultProps = {
  priority: "primary",
  size: "medium",
  type: "button",
};
