import Input from "../../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onAdd(event.target.value);
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
