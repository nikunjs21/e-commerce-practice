import ReactDOM from "react-dom";
import classes from './Modal.module.css';

const Modal = props => {
    return (
        <div style={{
            width: '100%',
            textAlign: 'center'
        }}>
            {ReactDOM.createPortal(<div className={classes.backdrop}></div>, document.getElementById('backdrop'))}
            {ReactDOM.createPortal(<div className={classes.overlay}>{props.children}</div>, document.getElementById('overlay'))}
        </div>
    );
}

export default Modal;