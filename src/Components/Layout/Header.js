import React from "react";
import classes from "./Header.module.css";
import mealimage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meal</h1>
        <HeaderCartButton onClick={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealimage} alt="delicious meal!" />
      </div>
    </React.Fragment>
  );
};
export default Header;
