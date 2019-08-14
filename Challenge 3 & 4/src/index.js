import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Page from "./page/page";
import App from "./App";
import Tombol from "./kom";
import { Provider } from "unistore/react";
import { store } from "./components/store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
