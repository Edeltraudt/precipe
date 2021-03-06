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
import Loader from "../../components/core/loader";

import API from "../../utility/api";
import UserContext from "../../contexts/user-context";

import styles from "./base.module.scss";

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

const RecipeViewWrap = ({ match }) => <RecipeView match={match} />;

const BaseView = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(false);
  const isAuthenticated = Boolean(user);

  useEffect(() => {
    setIsLoading(true);

    API.get("/me")
      .then((res) => {
        setUser(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [setUser]);

  return (
    <main className={styles.Wrap}>
      <Loader active={isLoading} />
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <Switch>
            <Route path="/app">
              {!isLoading &&
                (isAuthenticated ? (
                  <>
                    <section className={styles.Sidebar}>
                      <CalendarView />
                    </section>

                    <div className={styles.Main}>
                      <aside className={styles.Account}>
                        <AccountSummary />
                      </aside>

                      <SubRoute
                        path="/app/recipe/:id/:slug"
                        component={<RecipeViewWrap />}
                      />
                      <SubRoute
                        path="/app/account"
                        component={<AccountView />}
                      />

                      <Route path="/app" exact>
                        <DashboardView />
                      </Route>
                    </div>
                  </>
                ) : (
                  <Redirect to="/" />
                ))}
            </Route>

            <Route path="/">
              <LandingView />

              {isAuthenticated && <Redirect to="/app" />}
            </Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </main>
  );
};

export default BaseView;
