import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// 1- draw the UI
// 2- install redux react-redux redux-logger
// NOTE: "react-redux" are used everywhere except RootReducer and Store we use "redux"
// 3- config redux --> 1- rootReducer.js 2-Store.js
// 4- add the Provider store={store}
// 5- ADD LOGICS

// 1-
export const sum = (x, y) => {
  const total = x + y;
  return total;
};

export const sum2 = (x, y) => {
  const total = x + y;
  return { total };
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
