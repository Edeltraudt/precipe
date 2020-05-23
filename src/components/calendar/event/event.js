import React, { useState } from "react";
import classNames from "classnames";

import { IconCheckbox } from "./../../core";
import { UserIconGroup } from "./../../user/icons";

import { eventModel } from "./../../../models/event";
import { useGroupColor } from "../../../hooks/user-hooks";

import styles from "./event.module.scss";

const getTime = (time) => time.slice(0, time.lastIndexOf(":"));
const getTimeString = (start, end) => {
  let str = getTime(start);

  if (end) {
    str += "–" + getTime(end);
  }

  return str;
};

const CalendarEvent = ({ event }) => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = (status) => {
    setAccepted(true);
  };

  const handleDecline = (status) => {
    setAccepted(false);
  };

  return (
    <article
      className={styles.Wrap}
      style={useGroupColor(event.group ? event.group.id : -1)}
    >
      <div className={classNames(styles.Bubble, { [styles.joined]: accepted })}>
        <time className={styles.Time}>
          {getTimeString(event.startTime, event.endTime)}
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

        {event.group && <UserIconGroup size="s" members={[event.group]} />}
      </div>
    </article>
  );
};

CalendarEvent.propTypes = {
  event: eventModel,
};

export default CalendarEvent;
