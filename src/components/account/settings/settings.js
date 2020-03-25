import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import UserContext from "./../../../contexts/user-context";

import {
  Headline,
  Card,
  Input,
  Tag,
  Button,
  Form,
  FormRow,
  FormItem
} from "./../../core";

import styles from "./settings.module.scss";

export const AccountSettings = props => {
  const user = useContext(UserContext);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const handleUpdatePasswordClick = e => {
    e.preventDefault();
    setIsEditingPassword(true);
  };

  const handleUpdatePassword = e => {
    e.preventDefault();
    // TODO: only close on success
    setIsEditingPassword(false);
  };

  return (
    <section className="card">
      <Headline level="2" type="subheadline">
        Account settings
      </Headline>
      <dl className={styles.AccountSettings}>
        <div className={styles.Item}>
          <dt className={styles.Label}>E-Mail Address</dt>
          <dd className={styles.Value}>{user.mail}</dd>
        </div>
        <div className={styles.Item}>
          <dt className={styles.Label}>Set a new password</dt>
          <dd className={styles.Value}>
            {!isEditingPassword && (
              <Button style="link" onClick={handleUpdatePasswordClick}>
                Update password
              </Button>
            )}
          </dd>
          {isEditingPassword && (
            <Form onSuccess={handleUpdatePassword}>
              <FormRow>
                <FormItem>
                  <Input
                    type="password"
                    placeholder="Choose your new password"
                  />
                </FormItem>
              </FormRow>
              <FormRow>
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
