import React, { useState } from "react";
import "./App.css";
import Header from "./componets/Layout/Header";
import Meals from "./componets/Meals/Meals";
import Cart from "./componets/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  //used for show and close the cart
  // *
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  // **
  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      </CartProvider>
  );
}

export default App;
