import styles from "../styles/modal.module.scss";

export const Modal = (props) => {

    function cancelHandler(){
        props.onCancel();
    }

    return (
        <div className={styles.modal}>
           <div> {props.children} </div>
        </div>
    );
}
export default Modal;
