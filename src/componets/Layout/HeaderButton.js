import React, { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-contect";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";

const HeaderButton = (props) => {
  const cartCTX = useContext(CartContext);

  const { items } = cartCTX;
  const [btnHigh, setBtnHigh] = useState(false);

  const numberOfCartItems = items.reduce((crNo, item) => {
    return crNo + item.amount;
  }, 0);

  const btnClasess = `${classes.button} ${btnHigh ? classes.bump : ""}`;


  // Animation
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHigh(true);

    const timer = setTimeout(() => {
      setBtnHigh(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);




  return (
    <button className={btnClasess} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;
