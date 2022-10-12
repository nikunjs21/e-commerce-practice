import Card from "./Card";
import Modal from "./Modal";

const ErrorModal = props => {
    return (
        <>
            <Modal><Card headerText="Error">{props.children}</Card><button onClick={props.onDismiss}>Ok</button></Modal>
        </>
    );
}

export default ErrorModal;