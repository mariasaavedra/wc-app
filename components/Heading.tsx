import { MaybeParentComponentProps } from "../interfaces/ParentComponentProps";
import styles from '../styles/components/Heading.module.scss';
import Text from './Text';

export interface HeadingProps extends MaybeParentComponentProps {
}

export default function Heading(props: HeadingProps) {
    return (
        <div className={styles.HeadingComponent}>
            <Text className={styles.HeadingComponent} size="h1">
                {props.children}
            </Text>
        </div>
    );
}