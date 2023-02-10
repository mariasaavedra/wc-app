import { MaybeParentComponentProps } from "../interfaces/ParentComponentProps";
import styles from "../styles/components/EventCard.module.scss";
import { Button } from "./Button";


export interface EventCardProps extends MaybeParentComponentProps {
  title: string;
  href: string;
}

export default function EventCard(props: EventCardProps) {
  return (
    <div
      className={`${styles.EventCard} mb-4 mx-[0.5rem] p-8 rounded-xl text-center relative flex-1`}
    >
      <h3 className="text-2xl uppercase text-left my-4 font-black">{props.title}</h3>
      <div className="my-2">
        <p className="text-md text-left leading-normal">{props.children}</p>
      </div>
      <Button
        className=" mx-0  mt-6"
        href={props.href}
      >
        Register
      </Button>
    </div>
  );
}
