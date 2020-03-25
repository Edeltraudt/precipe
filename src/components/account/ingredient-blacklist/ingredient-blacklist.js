import React, { useState } from "react";
import PropTypes from "prop-types";

import { Headline, Card, Input, Tag } from "./../../core";

import styles from "./ingredient-blacklist.module.scss";

export const IngredientBlacklist = props => {
  return (
    <section className="card">
      <Headline level="2" type="subheadline">
        Ingredient black list
      </Headline>
      <p>
        Any more elaborate allergies and intolerances than listed above? Be sure
        to still tell your friends. And enter all ingredients you cannot eat or
        just don’t like. Whatever.
      </p>

      <Input
        id="blacklist-search"
        type="search"
        placeholder="Search for an ingredient"
      />
      <ul className={styles.Blacklist}>
        <li className={styles.Item}>
          <Tag checked style="negative">
            Peanuts
          </Tag>
        </li>
      </ul>
    </section>
  );
};
