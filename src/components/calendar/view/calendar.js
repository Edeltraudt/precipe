import React, { useState } from "react";
import PropTypes from "prop-types";

import { Headline } from "./../../core/typography";
import { Button } from "./../../core/forms";

import CalendarDay from "./../day";
import CalendarForm from "./../form";

import styles from "./calendar.module.scss";

const Calendar = props => {
  const [isCreating, setIsCreating] = useState(true);

  const handleCreateEventClick = e => {
    setIsCreating(true);
  };

  const handleCreateEvent = e => {
    setIsCreating(false);
  };

  return (
    <div className={[styles.Slider, isCreating ? styles.form : ""].join(" ")}>
      <div className={[styles.Slide, styles.Calendar].join(" ")}>
        <Headline level="2">Events</Headline>

        <div className={styles.Days}>
          {props.upcomingEvents.map(day => (
            <CalendarDay events={day.events} key={day.date} />
          ))}
        </div>

        <Button className={styles.Button} onClick={handleCreateEventClick}>
          Create new event
        </Button>
      </div>

      <div className={[styles.Slide, styles.Form].join(" ")}>
        <Headline level="2">New Event</Headline>
        <CalendarForm onSuccess={handleCreateEvent} />
      </div>
    </div>
  );
};

Calendar.propTypes = {
  upcomingEvents: PropTypes.array
};

export default Calendar;
