import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CalendarView from "../../components/calendar";
import DashboardView from "../dashboard";
import AccountView from "../account";
import RecipeView from "../recipe";

import { Icon } from "../../components/core";
import { AccountSummary } from "../../components/account";

import styles from "./base.module.scss";

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

const SubRoute = ({ component, ...props }) => (
  <Route {...props}>
    <nav className={styles.Back}>
      <Link to="/" className={styles.BackLink}>
        <Icon name="arrow-left" className={styles.BackIcon} />
        <span>Back to recipes</span>
      </Link>
    </nav>
    {component}
  </Route>
);

const BaseView = props => (
  <main className={styles.Wrap}>
    <section className={styles.Sidebar}>
      <CalendarView upcomingEvents={upcomingEvents} />
    </section>
    <div className={styles.Main}>
      <Router>
        <aside className={styles.Account}>
          <AccountSummary />
        </aside>

        <Switch>
          <SubRoute path="/account" component={<AccountView />} />
          <SubRoute path="/recipe/:id" component={<RecipeView />} />

          <Route path="/">
            <DashboardView />
          </Route>
        </Switch>
      </Router>
    </div>
  </main>
);

export default BaseView;
