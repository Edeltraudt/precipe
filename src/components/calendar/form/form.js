import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { UserIconGroup } from "./../../user/icons";
import Form, {
  FormItem,
  FormRow,
  Button,
  Input,
  InputWithIcon
} from "./../../core/forms";

import styles from "./form.module.scss";

const CalendarForm = ({ onSuccess }) => {
  const [title, setTitle] = useState("");
  const [invitees, setInvitees] = useState([]);
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
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
    if (onSuccess) {
      onSuccess(title);
      setDefaultValues();
      console.log(invitees, endTime, recipe);
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
          label="Add people or a group"
          info="Plan your meals around the people you’re inviting while respecting any dietary restrictions."
          showInfoTop
        >
          <UserIconGroup editable groupId={1} />
        </FormItem>
      </FormRow>

      <FormRow>
        <FormItem
          label="Attach a recipe"
          info="Select a recipe from your overview or create a new one."
        >
          <InputWithIcon icon="search">
            <Input
              type="search"
              id="new-event-recipe"
              placeholder="Search your recipes..."
            />
          </InputWithIcon>
        </FormItem>
      </FormRow>

      <Button className={styles.Button} type="submit">
        Create & Invite
      </Button>
    </Form>
  );
};

CalendarForm.propTypes = {
  onSuccess: PropTypes.func
};

export default CalendarForm;
