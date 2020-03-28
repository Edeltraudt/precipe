import React, { useState } from "react";
import PropTypes from "prop-types";

import { Headline } from "./../../core/typography";
import { Button } from "./../../core/forms";

import CalendarDay from "./../day";
import CalendarForm from "./../form/form";

import styles from "./calendar.module.scss";

const Calendar = ({ upcomingEvents }) => {
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateEventClick = e => {
    setIsCreating(true);
  };

  const handleCreateEvent = e => {
    setIsCreating(false);
  };

  return (
    <div className={`${styles.Slider} ${isCreating ? styles.form : ""}`}>
      <div className={`${styles.Slide} ${styles.Calendar}`}>
        <Headline level="2">Upcoming Meals</Headline>

        <div className={styles.Days}>
          {upcomingEvents.map(day => (
            <CalendarDay events={day.events} key={day.date} />
          ))}
        </div>

        <Button className={styles.Button} onClick={handleCreateEventClick}>
          Invite friends to a meal
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
