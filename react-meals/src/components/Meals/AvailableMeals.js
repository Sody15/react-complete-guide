import { useState, useEffect } from 'react';
import Card from '../UI/Card';

import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://react-http-dd322-default-rtdb.firebaseio.com/meals.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      let mealsList = [];
      for (const prop in data) {
        let meal = data[prop];
        mealsList.push({
          id: prop,
          name: meal.name,
          description: meal.description,
          price: meal.price,
        });
        setMeals(mealsList);
        setIsLoading(false);
      }
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError('Error Loading Meals');
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes['meals-loading']}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return <section className={classes['meals-error']}>{error}</section>;
  }

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
