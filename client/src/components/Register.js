import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Form, Input } from "semantic-ui-react";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { axiosWithAuth } from "../authorization/axiosWithAuth";

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Your username must be at least 3 characters!")
    .required("Username is required!"),
  password: Yup.string()
    .min(3, "Your password must be at least 3 characters!")
    .required("Password is required!")
});

const Register = (props, { isSubmitting }) => {
  const [storedValue, setValue] = useLocalStorage("token");

  return (
    <div style={{ width: "50vw", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Register New User</h1>
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);
          console.log(values);
          const url = "/register";
          return axiosWithAuth()
            .post(url, values)
            .then(res => {
              console.log(res);
              setValue(res.data.token);
              props.history.push("/restricted");
            })
            .catch(err => console.log(err));
        }}
        render={({ touched, errors, handleSubmit, handleChange }) => {
          return (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              onSubmit={handleSubmit}
            >
              <Form.Field
                label="Username"
                control={Input}
                type="text"
                name="username"
                autoComplete="off"
                placeholder="Username"
                onChange={handleChange}
                width="5"
              />
              {errors.username && touched.username ? (
                <p style={{ marginBottom: "20px", color: "red" }}>
                  {errors.username}
                </p>
              ) : null}

              <Form.Field
                label="Password"
                control={Input}
                type="password"
                name="password"
                autoComplete="off"
                placeholder="Password"
                onChange={handleChange}
                width="5"
              />
              {errors.password && touched.password ? (
                <p style={{ marginBottom: "20px", color: "red" }}>
                  {errors.password}
                </p>
              ) : null}

              <Button type="submit" color="blue">
                Submit &rarr;
              </Button>
              {isSubmitting && "Loading!"}
            </Form>
          );
        }}
      />
    </div>
  );
};

export default Register;
