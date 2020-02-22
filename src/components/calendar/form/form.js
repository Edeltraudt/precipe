import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { UserIconGroup } from "./../../user/icons";
import Form, { FormItem, FormRow, Button, Input } from "./../../core/forms";

import styles from "./form.module.scss";

const CalendarForm = props => {
  const [title, setTitle] = useState("");
  const [invitees, setInvitees] = useState([]);
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [recipe, setRecipe] = useState(0);

  const setDefaultValues = () => {
    // TODO: set good default values
    setTitle("");
    setInvitees([]);
    setDate(new Date().toISOString().substring(0, 10));
    setStartTime("12:00");
    setEndTime("13:00");
    setRecipe(null);
  };

  useEffect(() => {
    setDefaultValues();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    e.persist();

    // on success...
    if (props.onSuccess) {
      props.onSuccess(title);

      setDefaultValues();
    }
  };

  return (
    <Form className={styles.Form} onSubmit={handleSubmit}>
      <FormRow>
        <FormItem label="Event name">
          <Input
            type="text"
            id="new-event-title"
            size="l"
            placeholder="e.g. Dinner"
            onChange={setTitle}
            value={title}
          />
        </FormItem>
      </FormRow>

      <FormRow>
        <FormItem label="Add people or a group">
          <UserIconGroup editable />
        </FormItem>
      </FormRow>

      <FormRow>
        <FormItem label="Date">
          <Input
            type="date"
            id="new-event-date"
            value={date}
            onChange={setDate}
          />
        </FormItem>
        <FormItem label="Time">
          <Input
            type="time"
            id="new-event-time"
            value={startTime}
            onChange={setStartTime}
          />
        </FormItem>
      </FormRow>

      <FormRow>
        <FormItem
          label="Attach a recipe"
          info="Select a recipe from your overview or create a new one."
        >
          <Input
            type="search"
            id="new-event-recipe"
            placeholder="Search your recipes..."
          />
        </FormItem>
      </FormRow>

      <Button className={styles.Button} type="submit">
        Create & Invite
      </Button>
    </Form>
  );
};

CalendarForm.propTypes = {};

export default CalendarForm;
