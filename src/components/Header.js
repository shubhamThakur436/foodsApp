import React from "react";
import { Link } from "react-router-dom";

import classes from "./header.module.scss";

const Header = (props) => {
      const loginHandler = () => {
            const { onLogin, onLogout, loggedIn } = props;
            if (loggedIn) {
                  onLogout();
            }
            else {
                  onLogin();
            }
      }
      return (
            <div className={classes.Header}>
                  <Link to="/"><i className="fas fa-utensils" style={{ marginRight: "1rem", fontSize: "2rem" }}></i>Food's Restaurant</Link>
                  <Link to="/checkout">Checkout</Link>
                  <div className={classes.RightMenu}>
                        <button onClick={loginHandler} style={{
                              margin: "auto 1rem",
                              padding: "0.3rem 1rem",
                              fontSize: "1.3rem",
                              borderRadius: "5px",
                              outline: "none",
                              color: "white",
                              backgroundColor: `${props.loggedIn ? "crimson" : "green"}`
                        }}>{props.loggedIn ? "Logout" : "   Login   "}</button>

                        <i className="fas fa-shopping-cart" onClick={(e) => {
                              props.onOpenCart();
                              e.stopPropagation();
                        }}>
                              <span>{props.totalItems}</span>
                        </i>
                  </div>
            </div >
      );
};

export default Header;