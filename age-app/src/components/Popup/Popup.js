import styles from "./Popup.module.css";

const Popup = (props) => {
  const clickHandler = () => {
    props.closePopup(null);
  };

  return (
    <>
      <div className={`${styles["popup-overlay"]}`}></div>
      <div className={`${styles.popup}`}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <button type="button" onClick={clickHandler}>
          Okay
        </button>
      </div>
    </>
  );
};

export default Popup;
