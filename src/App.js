import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meal from "./Components/Meals/Meal";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const shownCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onHide={hideCartHandler} />}
      <Header onShow={shownCartHandler} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
