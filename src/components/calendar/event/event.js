import React, { useState } from "react";

import { IconCheckbox } from "./../../core";
import { UserIconGroup } from "./../../user/icons";

import { eventModel } from "./../../../models/event";
import { useGroupColor } from "../../../hooks/user-hooks";

import styles from "./event.module.scss";

const padTime = (n) => n.toString().padStart(2, 0);
const getTime = (date) =>
  padTime(date.getHours()) + ":" + padTime(date.getMinutes());

const CalendarEvent = ({ event }) => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = (status) => {
    setAccepted(true);
  };

  const handleDecline = (status) => {
    setAccepted(false);
  };

  return (
    <article className={styles.Wrap} style={useGroupColor(event.group.id)}>
      <div className={[styles.Bubble, accepted ? styles.joined : ""].join(" ")}>
        <time className={styles.Time}>
          {getTime(event.startDate)}–{getTime(event.endDate)}
        </time>
        <h4 className={styles.Title}>{event.title}</h4>
      </div>

      <div className={styles.Info}>
        <span className={styles.Actions}>
          <IconCheckbox
            type="radio"
            name={event.id + "-invitation"}
            id={event.id + "-accept"}
            onChange={handleAccept}
            label="Accept"
          />
          <IconCheckbox
            type="radio"
            name={event.id + "-invitation"}
            id={event.id + "-decline"}
            icon="close"
            onChange={handleDecline}
            label="Decline"
          />
        </span>

        <UserIconGroup size="s" members={[event.group]} />
      </div>
    </article>
  );
};

CalendarEvent.propTypes = {
  event: eventModel,
};

export default CalendarEvent;
