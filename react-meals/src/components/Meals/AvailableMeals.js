import MEALS_DATA from "../../dummy-meals";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const mealsList = MEALS_DATA.map((meal) => {
    return <li>{meal.name}</li>;
  });

  return (
    <section className={classes.meal}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
