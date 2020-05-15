import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// eslint-disable-next-line no-unused-vars
import App from "./App";
import Connexion from "./components/Connexion";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Connexion />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
