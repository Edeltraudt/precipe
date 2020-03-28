import React, { useState, useContext } from "react";

import UserContext from "./../../../contexts/user-context";

import { IconCheckbox } from "./../../core";
import { UserIconGroup } from "./../../user/icons";

import { eventModel } from "./../../../models/event";

import styles from "./event.module.scss";

const padTime = n => n.toString().padStart(2, 0);
const getTime = date =>
  padTime(date.getHours()) + ":" + padTime(date.getMinutes());

const CalendarEvent = ({ event }) => {
  const user = useContext(UserContext);
  const index = user.groups.findIndex(groupId => groupId === event.groupId);
  const color = user.groupColors[index];

  const [accepted, setAccepted] = useState(false);

  const handleAccept = status => {
    setAccepted(true);
  };

  const handleDecline = status => {
    setAccepted(false);
  }

  return event ? (
    <article
      className={styles.Wrap}
      style={{ "--color": color, "--color-inv": color ? "#fff" : null }}
    >
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
        <UserIconGroup size="s" groupId={event.groupId} />
      </div>
    </article>
  ) : null;
};

CalendarEvent.propTypes = {
  event: eventModel
};

export default CalendarEvent;
