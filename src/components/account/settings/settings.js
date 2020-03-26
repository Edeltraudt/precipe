import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import UserContext from "./../../../contexts/user-context";

import {
  Headline,
  Input,
  Message,
  Tag,
  Button,
  Form,
  FormRow,
  FormItem
} from "./../../core";

import styles from "./settings.module.scss";

export const AccountSettings = props => {
  const user = useContext(UserContext);
  const [hasPasswordError, setHasPasswordError] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const [hasEmailError, setHasEmailError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  const handleUpdatePasswordClick = e => {
    e.preventDefault();
    setIsEditingPassword(true);
  };

  const handleCancelUpdatePasswordClick = e => {
    e.preventDefault();
    setIsEditingPassword(false);
    setHasPasswordError(false);
    setPasswordError("");
    setPassword("");
  }

  const handleUpdateEmailClick = e => {
    e.preventDefault();
    setIsEditingEmail(true);
  };

  const handleCancelUpdateEmailClick = e => {
    e.preventDefault();
    setIsEditingEmail(false);
    setHasEmailError(false);
    setEmailError("");
    setEmail("");
  }

  const handleUpdatePassword = e => {
    e.preventDefault();

    if (!password || password == "") {
      setHasPasswordError(true);
      setPasswordError("Please choose a password.");
    } else {
      setIsEditingPassword(false);
      setHasPasswordError(false);
      setPasswordError("");
      setPassword("");
    }
  };

  const handleUpdateEmail = e => {
    e.preventDefault();

    if (!email || email == "") {
      setHasEmailError(true);
      setEmailError("Please enter a valid e-mail.");
    } else {
      setIsEditingEmail(false);
      setHasEmailError(false);
      setEmailError("");
      setPassword("");
    }
  };

  return (
    <section className="card">
      <Headline level="2" type="subheadline">
        Account settings
      </Headline>
      <dl className={styles.AccountSettings}>
        <div className={styles.Item}>
          <dt className={styles.Label}>
            <label htmlFor="account-setting-email">E-Mail Address</label>
          </dt>
          <dd className={styles.Value}>
            <Button style="plain-link" onClick={handleUpdateEmailClick}>
              {user.mail}
            </Button>
          </dd>
          {isEditingEmail && (
            <Form onSubmit={handleUpdateEmail}>
              <FormRow>
                <FormItem>
                  <Input
                    id="account-setting-email"
                    type="email"
                    placeholder="lorem@ipsum.com"
                    value={email}
                    onChange={setEmail}
                  />
                </FormItem>
              </FormRow>
              <FormRow>
                <FormItem>
                  <Message size="s" style={hasEmailError ? "danger" : false}>
                    {hasEmailError && emailError}
                    <Button style="plain-link" onClick={handleCancelUpdateEmailClick}>
                      Cancel and do not update e-mail
                    </Button>
                  </Message>
                </FormItem>
                <FormItem>
                  <Button type="submit">Update e-mail</Button>
                </FormItem>
              </FormRow>
            </Form>
          )}
        </div>
        <div className={styles.Item}>
          <dt className={styles.Label}>
            <label htmlFor="account-setting-password">Set a new password</label>
          </dt>
          <dd className={styles.Value}>
            {!isEditingPassword && (
              <Button style="link" onClick={handleUpdatePasswordClick}>
                Update password
              </Button>
            )}
          </dd>
          {isEditingPassword && (
            <Form onSubmit={handleUpdatePassword}>
              <FormRow>
                <FormItem>
                  <Input
                    id="account-setting-password"
                    type="password"
                    placeholder="Choose your new password"
                    value={password}
                    onChange={setPassword}
                  />
                </FormItem>
              </FormRow>
              <FormRow>
                <FormItem>
                  <Message size="s" style={hasPasswordError ? "danger" : false}>
                    {hasPasswordError
                      ? passwordError
                      : "Make sure to choose a secure password."}
                    <Button
                      style="plain-link"
                      onClick={handleCancelUpdatePasswordClick}
                    >
                      Cancel and do not change password
                    </Button>
                  </Message>
                </FormItem>
                <FormItem>
                  <Button type="submit">Save new password</Button>
                </FormItem>
              </FormRow>
            </Form>
          )}
        </div>
      </dl>
    </section>
  );
};
