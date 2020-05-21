import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Redirect } from "react-router-dom";

import API from "../../../utility/api";

import { Message } from "./../../core/typography";
import Form, { Input, Button, FormRow, FormItem } from "./../../core/forms";

import UserContext from "./../../../contexts/user-context";

const AuthForm = (props) => {
  const [hasError, setHasError] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const mountedRef = useRef(true);

  const handleLoginSubmit = (e, setUser) => {
    e.preventDefault();
    setIsSuccessful(false);
    setHasError(false);

    API.post("login", { name, password })
      .then((res) => {
        if (!mountedRef.current) return null;

        setUser(res.data);

        if (mountedRef.current) {
          setIsSuccessful(true);
        }
      })
      .catch((error) => {
        console.log("Err", error);
        setHasError(true);
      });
  };

  useEffect(() => {
    return () => (mountedRef.current = false);
  }, []);

  return (
    <UserContext.Consumer>
      {({ user, setUser }) => (<>
        <Form onSubmit={(e) => handleLoginSubmit(e, setUser)}>
          <FormRow>
            <FormItem label="Email address">
              <Input
                id="email"
                type="text"
                name="name"
                value={name}
                onChange={setName}
              />
            </FormItem>
          </FormRow>
          <FormRow>
            <FormItem label="Password">
              <Input
                id="password"
                type="password"
                name="password"
                value={name}
                onChange={setPassword}
              />
            </FormItem>
          </FormRow>
          {hasError && (
            <FormRow>
              <Message theme="danger">Well, that didn't work</Message>
            </FormRow>
          )}
          <FormRow>
            <FormItem>
              <Button type="submit">Sign in</Button>
            </FormItem>
            {/*<FormItem className={styles.Forgot}>
              <a href="">I forgot my password</a>
            </FormItem>*/}
          </FormRow>

        </Form>
        {isSuccessful && <div>
          Let's go!
          <Redirect to="/app" />
        </div>}</>
      )}
    </UserContext.Consumer>
  );
};

export default AuthForm;
