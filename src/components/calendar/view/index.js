import React, { useState, useEffect } from "react";

import { Headline } from "./../../core/typography";
import { Button } from "./../../core/forms";

import CalendarDay from "./../day";
import CalendarForm from "./../form/form";

import API from "./../../../utility/api";

import styles from "./calendar.module.scss";

const Calendar = (props) => {
  const [isCreating, setIsCreating] = useState(false);
  const [events, setEvents] = useState([]);

  const handleCreateEventClick = (e) => {
    setIsCreating(true);
  };

  const handleCreateEvent = (e) => {
    setIsCreating(false);
  };

  useEffect(() => {
    API.get(`api/events`)
      .then((res) => setEvents(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className={`${styles.Slider} ${isCreating ? styles.form : ""}`}>
      <div className={`${styles.Slide} ${styles.Calendar}`}>
        <Headline level="2">Upcoming Meals</Headline>

        <div className={styles.Days}>
          {events.map((day) => (
            <CalendarDay events={day.events} key={day.date} />
          ))}
        </div>

        <Button className={styles.Button} onClick={handleCreateEventClick}>
          Invite friends to a meal
        </Button>
      </div>

      <div className={[styles.Slide, styles.Form].join(" ")}>
        <Headline level="2">New Invitation</Headline>
        <CalendarForm onSuccess={handleCreateEvent} />
      </div>
    </div>
  );
};

export default Calendar;
