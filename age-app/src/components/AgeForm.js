import styles from "./AgeForm.module.css";
import { useState, useRef } from "react";
import Popup from "./Popup/Popup";
import Button from "./UI/Button";

const AgeForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const clearForm = () => {
    document.getElementById("username").value = "";
    document.getElementById("age").value = "";
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userName = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (userName.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (age < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (>0)",
      });
      return;
    }

    props.onAddUser(userName, age);
    clearForm();
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <Popup
          title={error.title}
          message={error.message}
          closePopup={errorHandler}
        />
      )}
      <form className={`${styles["age-form"]}`} onSubmit={submitHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" ref={nameInputRef}></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" ref={ageInputRef}></input>
        <Button type="submit">Add User</Button>
      </form>
    </>
  );
};

export default AgeForm;
