import styles from "./AgeDisplay.module.css";

const AgeDisplay = (props) => {
  return (
    props.users.length > 0 && (
      <ul className={`${styles["age-display"]}`}>
        {props.users.map((user) => {
          return (
            <li key={user.id} className={`${styles["age-display__item"]}`}>
              {user.userName} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    )
  );
};

export default AgeDisplay;
