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
  const goToUrl = () => {
    if (props.href) {
      if (isUrlAbsolute(props.href)) {
        window.open(props.href, "_blank");
      } else {
        router.push(props.href);
      }
    }
  };

  const hasCallback = () => {
    return (
      (!props.disabled && props.onClick !== null) ||
      (!props.disabled && props.href)
    );
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    // if passed, execute callback.
    e.currentTarget.blur();
    if (props.type !== "submit") {
      if (props.onClick) {
        props.onClick(e);
        // if no callback was passed, go to url.
      } else if (props.url) {
        goToUrl();
      }

      e.preventDefault();
    }
  };

  return (
    <button
      type={props.type}
      className={[
        styles[`btn-${props.priority}`],
        props.className,
        styles[`btn-${props.size}`],
      ].join(" ")}
      disabled={props.disabled}
      onClick={hasCallback() ? (e) => handleClick(e) : () => {}}
    >
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  priority: "primary",
  size: "medium",
  type: "button",
};
