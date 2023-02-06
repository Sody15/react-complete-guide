import styles from "./AgeForm.module.css";
import { useState } from "react";
import Popup from "./Popup/Popup";

const AgeForm = (props) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const clearForm = () => {
    document.getElementById("userName").value = "";
    document.getElementById("age").value = "";
    setUser(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (user && user.age > 0 && user.name) {
      props.addUser(user);
      clearForm();
      setError(null);
      return;
    }

    if (user.age <= 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (>0)",
      });
      return;
    }

    setError({
      title: "Invalid input",
      message: "Please enter a valid name and age (non-empty values).",
    });
  };

  const nameChange = (event) => {
    const name = event.target.value;
    if (name.trim().length > 0) {
      setUser((prevState) => {
        return { ...prevState, name };
      });
    }
  };

  const ageChange = (event) => {
    const age = event.target.value;
    setUser((prevState) => {
      return { ...prevState, age: +age };
    });
  };

  const close = () => {
    console.log("close");
    setError(null);
  };

  let popup = "";
  if (error) {
    popup = (
      <Popup title={error.title} message={error.message} closePopup={close} />
    );
  }

  return (
    <>
      {popup}
      <form className={`${styles["age-form"]}`} onSubmit={submitHandler}>
        <label for="userName">UserName</label>
        <input id="userName" type="text" onChange={nameChange}></input>
        <label for="age">Age (Years)</label>
        <input id="age" type="text" onChange={ageChange}></input>
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default AgeForm;
