import React from "react";
import Image from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Wong Fei Hung Chinese quisines</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={Image} />
      </div>
    </React.Fragment>
  );
};

export default Header;
