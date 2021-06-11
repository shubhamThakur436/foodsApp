import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import itemReducer from "./store/reducers/itemReducer"
import authReducer from "./store/reducers/authReducer"

const rootReducer = combineReducers({
  items: itemReducer,
  auth: authReducer
});


let middleware = composeWithDevTools(applyMiddleware(thunk));

if (process.env.NODE_ENV === "production") {
  middleware = applyMiddleware(thunk);
}

const store = createStore(rootReducer, middleware)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
