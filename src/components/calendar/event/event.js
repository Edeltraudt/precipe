import React, { useState, useContext } from "react";

import UserContext from "./../../../contexts/user-context";

import { Checkbox } from "./../../core/forms";
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

  // TODO: set default value when reloading
  const [isJoined, setIsJoined] = useState(false);

  const handleJoinChange = status => {
    setIsJoined(status);
  };

  return event ? (
    <article
      className={styles.Wrap}
      style={{ "--color": color, "--color-text": color ? "#fff" : null }}
    >
      <div className={[styles.Bubble, isJoined ? styles.joined : ""].join(" ")}>
        <time className={styles.Time}>
          {getTime(event.startDate)}–{getTime(event.endDate)}
        </time>
        <h4 className={styles.Title}>{event.title}</h4>
      </div>

      <div className={styles.Info}>
        <Checkbox
          label={isJoined ? "" : "Join"}
          id={event.id + "-join"}
          onChange={handleJoinChange}
        />
        <UserIconGroup size="s" groupId={event.groupId} />
      </div>
    </article>
  ) : null;
};

CalendarEvent.propTypes = {
  event: eventModel
};

export default CalendarEvent;
