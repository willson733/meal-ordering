import classes from "./Cart.module.css";
import Modal from "../../UI/Modal";
const Cart = (props) => {
  const mealItem = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "sashi", amount: 2, price: 44 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onHide={props.onHide}>
      {mealItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>22</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHide}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
