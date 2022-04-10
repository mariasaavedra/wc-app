import { MaybeParentComponentProps } from "../interfaces/ParentComponentProps";
import styles from "../styles/components/Link.module.scss";
import { default as NextLink } from "next/link";

export interface LinkProps extends MaybeParentComponentProps {
  newTab?: boolean;
  href: string;
  onClick?: Function;
  preventClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function Link(props: LinkProps) {
  const preventClickFromBubbling = (e: React.MouseEvent<HTMLElement>) => {
    if (e) {
      e.stopPropagation && e.stopPropagation();
      e.preventDefault && e.preventDefault();
    }
  };
  const preventIfNeeded = (e: React.MouseEvent<HTMLElement>) => {
    if (props.preventClick) {
      preventClickFromBubbling(e);
      props.preventClick(e);
    }
  };

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    if (props.onClick) {
      return props.onClick(e);
    } else {
      return null;
    }
  };

  if (props.newTab) {
    return (
      <a
        href={props.href}
        className={
          "py-4 px-3 text-base font-semibold hover:text-brand-purple " +
          props.className
        }
        style={props.style}
        target="_blank"
        rel="noreferrer noopener"
        onClick={preventIfNeeded}
      >
        {props.children}
      </a>
    );
  } else {
    return (
      <NextLink href={props.href}>
        <a
          className={
            "py-4 px-3 text-base font-semibold hover:text-brand-purple " +
            props.className
          }
          style={props.style}
          onClick={(e) => handleOnClick(e)}
        >
          {props.children}
        </a>
      </NextLink>
    );
  }
}

Link.defaultProps = {
  newTab: false,
};
