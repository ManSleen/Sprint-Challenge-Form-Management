import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import Home from "./components/Home";
import Register from "./components/Register";
import Restricted from "./components/Restricted";

const App = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    <Container>
      <Menu inverted color="green">
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/register"
          name="register-user"
          active={activeItem === "register-user"}
          onClick={handleItemClick}
        >
          Register a New User
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/restricted"
          name="restricted"
          active={activeItem === "restricted"}
          onClick={handleItemClick}
        >
          Access Restricted Area
        </Menu.Item>
      </Menu>
      <div />
      <Route exact path="/" component={Home} />
      <Route path="/register" render={props => <Register {...props} />} />
      <Route path="/restricted" render={props => <Restricted {...props} />} />
    </Container>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
