import React from "react";

import { action } from "@storybook/addon-actions";

import Button from "../button/button";
import Input from "../input/input";
import Form, { FormRow, FormItem } from "./form.js";

export default {
  component: Form,
  title: "Form Elements",
};

export const SimpleForm = () => (
  <Form onSubmit={action("submit")}>
    <FormRow>
      <FormItem label="Username">
        <Input
          id="username"
          type="text"
          placeholder="janedoe"
          onChange={action("username-input")}
        />
      </FormItem>
    </FormRow>
    <FormRow>
      <FormItem label="Password">
        <Input
          id="password"
          type="password"
          onChange={action("password-input")}
        />
      </FormItem>
    </FormRow>
    <Button type="submit">Submit</Button>
  </Form>
);
