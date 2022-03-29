interface SectionProps {
  children?: any;
  size: number | string;
  smSize?: number | string;
  mdSize?: number | string;
  lgSize?: number | string;
  style?: any;
}

export const Column = (props: SectionProps) => {
  const getClasses = (): string => {
    const classes = [`col-span-${props.size}`];
    if (props.smSize) {
      classes.push(`md:col-span-${props.smSize}`);
    }
    if (props.mdSize) {
      classes.push(`md:col-span-${props.mdSize}`);
    }
    if (props.lgSize) {
      classes.push(`lg:col-span-${props.lgSize}`);
    }
    return classes.join(" ");
  };
  return (
    <div style={props.style} className={getClasses()}>
      {props.children}
    </div>
  );
};

Column.defaultProps = {
  size: 1,
};
