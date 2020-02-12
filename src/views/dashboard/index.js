import React from "react";

import Calendar from "../../components/calendar/view/calendar";
import Recipes from "../../components/recipes/view/recipes";

import styles from "./dashboard.module.scss";

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

const DashboardView = props => {
  return (
    <main className={styles.Dashboard}>
      <section className={styles.Events}>
        <Calendar upcomingEvents={upcomingEvents} />
      </section>
      <section className={styles.Recipes}>
        <Recipes />
      </section>
    </main>
  );
};

export default DashboardView;
