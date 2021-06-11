import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/smaller/Button";

import classes from "./landing.module.scss";


const Landing = (props) => {
      return (
            <div className={classes.Landing}>
                  <h1>Welcome to Food's Kitchen</h1>
                  <Button><Link to="/menu">GO TO MENU</Link></Button>
            </div>
      );
};

export default Landing;