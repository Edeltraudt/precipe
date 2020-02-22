import React from "react";

import Calendar, { CalendarDay, CalendarEvent } from "./../components/calendar";

export default {
  title: "Calendar"
};

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const events = [
  {
    id: 1,
    startDate: new Date(today.setHours(11, 0, 0)),
    endDate: new Date(today.setHours(12, 0, 0)),
    title: "Breakfast",
    groupId: 2
  },
  {
    id: 2,
    startDate: new Date(today.setHours(18, 0, 0)),
    endDate: new Date(today.setHours(20, 0, 0)),
    title: "Djuvec Rice",
    groupId: 1
  },
  {
    id: 3,
    startDate: new Date(tomorrow.setHours(11, 0, 0)),
    endDate: new Date(tomorrow.setHours(14, 30, 0)),
    title: "Brunch",
    groupId: 2
  }
];

const upcomingEvents = [
  {
    date: today,
    events: [events[0], events[1]]
  },
  {
    date: tomorrow,
    events: [events[2]]
  }
];

export const Overview = () => <Calendar upcomingEvents={upcomingEvents} />;
export const Event = () => <CalendarEvent event={events[0]} />;
export const Day = () => <CalendarDay events={[events[0], events[1]]} />;
