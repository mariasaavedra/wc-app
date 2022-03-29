import { ParentComponentProps } from '../interfaces/ParentComponentProps';
import styles from '../styles/components/Text.module.scss';

type TextSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2' | 'b3';

export interface TextProps extends ParentComponentProps {
    /**
     * Heading (h) or Body (b), with relative size
     */
    size?: TextSize;
}

/**
 * Standard element for displaying typography
 */
export default function Text(props: TextProps) {
    const getClasses = () => {
        const classes = props.className?.split(' ') || [];
        const sizesWithStyles: Array<TextSize> = ['b1', 'b2', 'b3'];
        if (props.size && sizesWithStyles.includes(props.size)) {
            classes.push(styles[props.size]);
        }
        return classes.join(' ');
    };
    const renderText = (content: any) => {
        const classes = getClasses();
        switch (props.size) {
            case 'b1':
                return (
                    <p style={props.style} className={classes}>
                        {content}
                    </p>
                );
            case 'b2':
                return (
                    <p style={props.style} className={classes}>
                        {content}
                    </p>
                );
            case 'b3':
                return (
                    <p style={props.style} className={classes}>
                        {content}
                    </p>
                );
            case 'h1':
                return (
                    <h1 style={props.style} className={classes}>
                        {content}
                    </h1>
                );
            case 'h2':
                return (
                    <h2 style={props.style} className={classes}>
                        {content}
                    </h2>
                );
            case 'h3':
                return (
                    <h3 style={props.style} className={classes}>
                        {content}
                    </h3>
                );
            case 'h4':
                return (
                    <h4 style={props.style} className={classes}>
                        {content}
                    </h4>
                );
            case 'h5':
                return (
                    <h5 style={props.style} className={classes}>
                        {content}
                    </h5>
                );
            case 'h6':
                return (
                    <h6 style={props.style} className={classes}>
                        {content}
                    </h6>
                );
            default:
                return (
                    <p style={props.style} className={classes}>
                        {content}
                    </p>
                );
        }
    };
    const display = renderText(props.children);
    return <div className={styles.TextComponent}>{display}</div>;
}
