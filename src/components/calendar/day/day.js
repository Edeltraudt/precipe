import React from "react";
import PropTypes from "prop-types";

import CalendarEvent from "../event";

import { eventModel } from "./../../../models/event";

import styles from "./day.module.scss";

const CalendarDay = ({ events }) => {
  const date = events[0].startDate;
  const today = new Date();
  let isToday = false;

  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    isToday = true;
  }

  return (
    <div className={styles.Wrap}>
      <h3 className={[styles.Day, isToday ? styles.today : ""].join(" ")}>
        <span className={styles.Date}>{date.getDate()}</span>
        <span className={styles.Label}>
          {date.toLocaleString("en", {
            weekday: "long"
          })}
        </span>
      </h3>
      <ol className={styles.Events}>
        {events.map(event => (
          <li className={styles.Event} key={event.id}>
            <CalendarEvent event={event} />
          </li>
        ))}
      </ol>
    </div>
  );
};

CalendarEvent.propTypes = {
  events: PropTypes.arrayOf(eventModel)
};

export default CalendarDay;
