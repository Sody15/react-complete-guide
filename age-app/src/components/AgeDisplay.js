import styles from "./AgeDisplay.module.css";

const AgeDisplay = (props) => {
  return (
    props.users.length > 0 && (
      <div className={`${styles["age-display"]}`}>
        {props.users.map((user) => {
          return (
            <div className={`${styles["age-display__item"]}`}>
              {user.name} ({user.age} years old)
            </div>
          );
        })}
      </div>
    )
  );
};

export default AgeDisplay;
