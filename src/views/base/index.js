import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import CalendarView from "../../components/calendar";
import DashboardView from "../dashboard";
import AccountView from "../account";
import RecipeView from "../recipe";
import LandingView from "../landing";

import { Icon } from "../../components/core";
import { AccountSummary } from "../../components/account";

import UserContext from "../../contexts/user-context";

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
    groupId: 2,
  },
  {
    id: 2,
    startDate: new Date(today.setHours(18, 0, 0)),
    endDate: new Date(today.setHours(20, 0, 0)),
    title: "Djuvec Rice",
    groupId: 1,
  },
  {
    id: 3,
    startDate: new Date(tomorrow.setHours(11, 0, 0)),
    endDate: new Date(tomorrow.setHours(14, 30, 0)),
    title: "Brunch",
    groupId: 2,
  },
];

const upcomingEvents = [
  {
    date: today,
    events: [events[0], events[1]],
  },
  {
    date: tomorrow,
    events: [events[2]],
  },
];

const SubRoute = ({ component, ...props }) => (
  <Route {...props}>
    <nav className={styles.Back}>
      <Link to="/app" className={styles.BackLink}>
        <Icon name="arrow-left" className={styles.BackIcon} />
        <span>Back to recipes</span>
      </Link>
    </nav>
    {component}
  </Route>
);

const BaseView = (props) => {
  const [user, setUser] = useState({
    id: 1,
    name: "Laureena",
    mail: "laureena@outlook.com",
    password: "test",
    groups: [1, 2],
    groupColors: ["#385EFF", "#9C48B5"],
    dietaryRestrictions: [4, 5],
  });
  const isAuthenticated = Boolean(user);

  return (
    <main className={styles.Wrap}>
      <UserContext.Provider value={{ user, setUser }}>
        {isAuthenticated && (
          <section className={styles.Sidebar}>
            <CalendarView upcomingEvents={upcomingEvents} />
          </section>
        )}
        <div className={styles.Main}>
          <Router>
            {isAuthenticated && (
              <aside className={styles.Account}>
                <AccountSummary />
              </aside>
            )}

            <Switch>
              <Route path="/app">
                {isAuthenticated ? (
                  <>
                    <SubRoute path="/app/account" component={<AccountView />} />
                    <SubRoute
                      path="/app/recipe/:id"
                      component={<RecipeView />}
                    />

                    <DashboardView />
                  </>
                ) : (
                  <Redirect to="/" />
                )}
              </Route>

              <Route path="/">
                {isAuthenticated ? <Redirect to="/app" /> : <LandingView />}
              </Route>
            </Switch>
          </Router>
        </div>
      </UserContext.Provider>
    </main>
  );
};

export default BaseView;
