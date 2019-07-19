import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Form, Input } from "semantic-ui-react";

import { axiosWithAuth } from "../authorization/axiosWithAuth";

const Register = (props, { isSubmitting }) => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: ""
      }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        console.log(values);
        const url = "/register";
        return axiosWithAuth()
          .post(url, values)
          .then(res => {
            console.log(res);
            {
              /* localStorage.setItem("token", res.data.payload);
            props.history.push("/friends-list"); */
            }
          })
          .catch(err => console.log(err));
      }}
      render={props => {
        return (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
            onSubmit={props.handleSubmit}
          >
            <Form.Field
              label="Username"
              control={Input}
              type="text"
              name="username"
              autoComplete="off"
              placeholder="Username"
              onChange={props.handleChange}
              width="4"
            />

            <Form.Field
              label="Password"
              control={Input}
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Password"
              onChange={props.handleChange}
              width="4"
            />

            <Button>Submit &rarr;</Button>
            {isSubmitting && "Loading!"}
          </Form>
        );
      }}
    />
  );
};

export default Register;
