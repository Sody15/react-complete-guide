import Button from "../UI/Button";
import classes from "./Popup.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closePopup}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.popup}>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <Button onClick={props.closePopup}>Okay</Button>
      </footer>
    </div>
  );
};

const Popup = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closePopup={props.closePopup} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          closePopup={props.closePopup}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Popup;
