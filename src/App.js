import React, { Component } from "react";
import classes from './App.module.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import Landing from "./containers/Landing"
import Menu from "./containers/Menu"
import Checkout from "./containers/Checkout"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { login, logout } from "./store/actions/actions";

class App extends Component {
  state = {
    dialogOpen: false
  }
  onOpenCart = () => {
    console.log("open");
    this.setState({
      dialogOpen: true
    })
  }

  onCloseCart = () => {
    console.log("close");
    this.setState({
      dialogOpen: false
    })

  }
  render() {
    const { onLogin, onLogout, loggedIn, items } = this.props;

    let totalItems = Object.keys(items).reduce((a, b) => {
      return a + items[b].count;
    }, 0);
    return (
      <div className={classes.App} onClick={this.onCloseCart}>
        <BrowserRouter>
          <Header
            onLogin={onLogin}
            onLogout={onLogout}
            loggedIn={loggedIn}
            totalItems={totalItems}
            onOpenCart={this.onOpenCart}
          />
          {this.state.dialogOpen ? "Open" : "Close"}
          <Switch>
            <Route path="/" exact><Landing /></Route>
            <Route path="/menu" exact><Menu /></Route>
            <Route path="/checkout" exact><Checkout /></Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    loggedIn: state.auth.loggedIn
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    onLogin: () => dispatch(login()),
    onLogout: () => dispatch(logout())
  }
}
export default connect(mapStateToProps, mapActionsToProps)(App);
