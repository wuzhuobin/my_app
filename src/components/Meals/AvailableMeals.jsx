import React from "react";
import style from "./AvailableMeals.module.css";

import Context from "../../store";
import Card from "../General/Card";
import MealItem from "./MealItem";
import MealsSummary from "./MealsSummary";
const AvailableMeals = function () {
  const { meals } = React.useContext(Context);
  return (
    <React.Fragment>
      <MealsSummary />
      <section className={style.meals}>
        <Card>
          <ul>
            {meals.map((meal, index) => (
              <li key={index}>
                <MealItem
                  id={meal.id}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
                ></MealItem>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </React.Fragment>
  );
};

export default AvailableMeals;
