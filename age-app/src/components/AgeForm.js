import styles from "./AgeForm.module.css";
import { useState } from "react";
import Popup from "./Popup/Popup";
import Button from "./UI/Button";

const AgeForm = (props) => {
  const [user, setUser] = useState({ userName: "", age: "" });
  const [error, setError] = useState(null);

  const clearForm = () => {
    document.getElementById("username").value = "";
    document.getElementById("age").value = "";
    setUser(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (user) {
      if (user.userName.trim().length === 0) {
        setError({
          title: "Invalid input",
          message: "Please enter a valid name and age (non-empty values).",
        });
        return;
      }
      if (user.age < 1) {
        setError({
          title: "Invalid input",
          message: "Please enter a valid age (>0)",
        });
        return;
      }
    }

    if (user && user.age > 0 && user.userName) {
      props.onAddUser(user);
      clearForm();
      return;
    }
  };

  const nameChange = (event) => {
    const userName = event.target.value;
    setUser((prevState) => {
      return { ...prevState, userName };
    });
  };

  const ageChange = (event) => {
    const age = event.target.value;
    setUser((prevState) => {
      return { ...prevState, age: +age };
    });
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
        <input id="username" type="text" onChange={nameChange}></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChange}></input>
        <Button type="submit">Add User</Button>
      </form>
    </>
  );
};

export default AgeForm;
