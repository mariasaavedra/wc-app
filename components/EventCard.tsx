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
    <div className={styles.EventCardComponent + " " + "my-8 p-4"}>
      <Text size="h3">{props.title}</Text>
      <div className="my-2">
        <Text style={{ maxWidth: '700px'}} size="b2"> {props.children}</Text>
      </div>
      <div className="my-4">
        <Button size="small" href={props.href}>
          Register
        </Button>
      </div>
    </div>
  );
}
