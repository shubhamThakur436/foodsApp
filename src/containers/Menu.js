import React, { Component } from "react";

import classes from "./menu.module.scss";

import { connect } from "react-redux";
import * as actions from "../store/actions/actions";
import { isEmpty } from "../shared/utilities";

class Menu extends Component {
      componentDidMount() {
            this.props.onFetchPrices()
      }
      productList = () => {
            let { items } = this.props;
            return Object.keys(items).map(
                  (name) => {
                        let item = items[name];
                        return (
                              <div key={name} className={classes.Cont}>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/${item.image}`} alt={name} />
                                    <div className={classes.Content}>
                                          <h2>{name}</h2>
                                          <p>Price: ₹{item.price}</p>
                                          {item.count ? (
                                                <>
                                                      <p>Total: {item.count}</p>
                                                      <p>Cost (INR): {item.count * item.price}</p>
                                                </>
                                          ) : null}
                                    </div>
                                    <button className={classes.Button + " " + classes.Add} onClick={() => this.props.onAddItem(name)}>+</button>
                                    <button className={classes.Button + " " + classes.Remove} onClick={() => this.props.onRemoveItem(name)} disabled={!item.count}>–</button>
                              </div>
                        )
                  }
            )
      };
      render() {
            return (
                  <div className={classes.Menu}>
                        {isEmpty(this.props.items) ? "Loading..." : this.productList()}
                  </div>
            );
      }
};

const mapStateToProps = (state) => {
      return {
            items: state.items,
      }
}

const mapActionsToProps = (dispatch) => {
      return {
            onAddItem: (name) => dispatch(actions.addItem(name)),
            onRemoveItem: (name) => dispatch(actions.removeItem(name)),
            onFetchPrices: () => dispatch(actions.fetchPrices())
      }
}
export default connect(mapStateToProps, mapActionsToProps)(Menu);