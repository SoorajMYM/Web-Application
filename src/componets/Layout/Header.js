import React, { Fragment } from "react";

import classes from "./Header.module.css";

import Image from "../../Image/meal.jpg";
import HeaderButton from "./HeaderButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>My Food Order App</h1>
        <HeaderButton onClick={props.onShowCart}/>
      </header>
     
      <div className={classes.mainImage}>
        <img src={Image} alt="all foods" />
      </div>
    </Fragment>
  );
};

export default Header;
