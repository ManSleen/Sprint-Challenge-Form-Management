import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
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

  const logOut = name => {
    setActiveItem("home");
    localStorage.removeItem("token");
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/register" />
        )
      }
    />
  );

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
        <Menu.Item
          position="right"
          as={Link}
          to="/"
          name="logout"
          active={activeItem === "logout"}
          onClick={logOut}
        >
          Log Out
        </Menu.Item>
      </Menu>
      <div />
      <Route exact path="/" component={Home} />
      <Route path="/register" render={props => <Register {...props} />} />
      <PrivateRoute path="/restricted" component={Restricted} />
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
