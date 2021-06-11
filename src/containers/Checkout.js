import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import classes from "./checkout.module.scss";

const Checkout = (props) => {
      return (
            <div className={classes.Checkout}>
                  {props.loggedIn ? null : <Redirect to="/" />}
                  <h1>Checkout</h1>
                  <p>Thank you for your order</p>
            </div>
      );
};

const mapStateToProps = (state) => {
      return {
            loggedIn: state.auth.loggedIn
      }
}

export default connect(mapStateToProps)(Checkout);