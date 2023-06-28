import React, { Fragment } from "react";
import Mealsummary from "./MealSummary";
import AvailableMeal from "./AvalilableMeal";
const Meal = () => {
  return (
    <Fragment>
      <Mealsummary />
      <AvailableMeal />
    </Fragment>
  );
};
export default Meal;
