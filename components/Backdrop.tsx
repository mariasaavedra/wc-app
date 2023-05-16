import styles from "../styles/backdrop.module.scss";

export const Backdrop = (props) => {

    return (
        <div className={styles.backdrop} onClick={props.onCancel}></div>
    );

}
export default Backdrop;
