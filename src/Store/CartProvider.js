import React, { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "Add") {
    const updatedItem = state.item.concat(action.item);
    const updatedTotalItem =
      state.totalAmount + state.items.price * state.items.amount;
    return {
      items: updatedItem,
      totalAmount: updatedTotalItem,
    };
  }
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "Add", item: item });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "Remove", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
