import styles from "../styles/Text.module.scss";
interface TextProps {
  children: any;
}

export const getClasses = (): string => {
  const classes = [styles.ResponsiveBlockComponent];
  return classes.join(" ");
};

export const Text = (props: TextProps) => {
  return (
    <div className={styles.text + " text-xl text-center p-10 grid grid-flow-col"}>
      <div>
        {props.children}
      </div>
    </div>
  );
};

Text.defaultProps = {
  grid: 1,
};
