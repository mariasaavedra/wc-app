import { MaybeParentComponentProps } from "../interfaces/ParentComponentProps";
import styles from "../styles/components/EventCard.module.scss";
import { Button } from "./Button";
import Text from "./Text";
export interface EventCardProps extends MaybeParentComponentProps {
  title: string;
  href: string;
}

export default function EventCard(props: EventCardProps) {
  return (
    <div
      className={
        styles.EventCard +
        " " +
        "m-4 p-8 rounded-xl text-center relative min-h-[300px]"
      }
    >
      <h3 className="text-2xl uppercase my-4 font-black">{props.title}</h3>
      <div className="my-2">
        <p className="font-light text-sm leading-normal">{props.children}</p>
      </div>
      <Button
        className="absolute mx-auto left-0 right-0 bottom-6"
        href={props.href}
      >
        Register
      </Button>
    </div>
  );
}
