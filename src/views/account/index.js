import React from "react";

import { Button } from "./../../components/core/forms";
import { Headline } from "./../../components/core/typography";
import { DietaryRestrictions, IngredientBlacklist, AccountSettings } from "./../../components/account";

import styles from "./account.module.scss";

const AccountView = props => {
  return (
    <main className={`${styles.Account} wrap`}>
      <aside className="sidebar menu"></aside>

      <div className={`${styles.Main} content`}>
        <Headline level="1">My Account</Headline>

        <div className={styles.Section}>
          <DietaryRestrictions />
        </div>

        <IngredientBlacklist />
        <AccountSettings />
        <section className="card">
          <Headline level="2" type="subheadline">Delete my account</Headline>
          <p>Your account and user profile will be mercilessly annihilated and your friends will cry.</p>
          <Button style="danger">Delete Account</Button>
        </section>
      </div>
    </main>
  );
};

export default AccountView;
