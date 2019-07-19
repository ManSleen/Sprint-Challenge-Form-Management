import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import Home from "./components/Home";
import Register from "./components/Register";

const App = () => {
  return (
    <div>
      This be the App!
      <div>
        <Link to="/">Home</Link>
        <Link to="/register">Register a New User</Link>
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/register" render={props => <Register {...props} />} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
