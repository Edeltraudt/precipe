import React from "react";

import DashboardView from "./../views/dashboard";
import AccountView from "./../views/account";

import "./../assets/scss/styles.scss";

export default {
  title: "Views"
};

export const Dashboard = () => <DashboardView />;
export const Account = () => <AccountView />;
