import Button from "../UI/Button";
import classes from "./Popup.module.css";
import Wrapper from "../Helpers/Wrapper";

const Popup = (props) => {
  return (
    <Wrapper>
      <div className={classes.backdrop} onClick={props.closePopup}></div>
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
    </Wrapper>
  );
};

export default Popup;
