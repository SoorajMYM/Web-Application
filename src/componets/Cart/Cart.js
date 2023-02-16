import React, { useContext } from "react";
import Model from "../UI/Model";

import CartContext from "../../store/cart-contect";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Chart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `Rs ${cartCtx.totalAmount}`;

  const hasItems = cartCtx.items.length > 0;

  const addItemsHandler = (item) => {
    cartCtx.addItem({...item,amount : 1})
  };

  const removeItemsHandler = (id) => {
    cartCtx.removeItem(id)
  };

  const justList = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeItemsHandler.bind(null,item.id)}
          onAdd={addItemsHandler.bind(null,item)}
        />
      ))}
    </ul>
  );
  return (
    <Model onClose={props.onClose}>
      <div>{justList}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alts"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>order</button>}
      </div>
    </Model>
  );
};

export default Chart;
