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

const recipes = [
  {
    id: 1,
    title: "Simple beet carpaccio with mixed herbs",
    duration: 20,
    servings: 4,
    ingredients: [
      {
        id: 1,
        amount: 4,
        unit: null
      }
    ],
    instructions:
      "<p>Peel, halve, and thinly slice red onion. Remove leaves from herb stems and mince. Zest and juice lemon and add to a bowl with olive oil, sugar, capers, and salt. Season with pepper and mix well.</p><p>Peel and thinly slice beetroots with a mandoline. Add to bowl with the dressing and mix.</p><p>Layer beets on a plate and drizzle with olive oil. Garnish with flaky sea salt and more mixed herbs. Enjoy!</p>"
  },
  {
    id: 2,
    title: "Simple beet carpaccio with mixed herbs 2",
    duration: 20,
    servings: 4,
    ingredients: [
      {
        id: 1,
        amount: 4,
        unit: null
      }
    ],
    instructions:
      "<p>Peel, halve, and thinly slice red onion. Remove leaves from herb stems and mince. Zest and juice lemon and add to a bowl with olive oil, sugar, capers, and salt. Season with pepper and mix well.</p><p>Peel and thinly slice beetroots with a mandoline. Add to bowl with the dressing and mix.</p><p>Layer beets on a plate and drizzle with olive oil. Garnish with flaky sea salt and more mixed herbs. Enjoy!</p>"
  }
];

const DashboardView = props => {
  return (
    <main className={`${styles.Dashboard} wrap`}>
      <section className={`${styles.Events} sidebar`}>
        <Calendar upcomingEvents={upcomingEvents} />
      </section>
      <section className={`${styles.Recipes} content`}>
        <Recipes recipes={recipes} />
      </section>
    </main>
  );
};

export default DashboardView;
