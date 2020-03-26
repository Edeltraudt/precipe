import React, { useState } from "react";
import PropTypes from "prop-types";

// import { Tag } from "./../../core";
import { Input, InputWithIcon } from "./../../core/forms";
import { Headline } from "./../../core/typography";

import { ReactComponent as IconSearch } from "./../../../assets/icons/search.svg";

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

      <InputWithIcon icon={<IconSearch />}>
        <Input
          id="blacklist-search"
          type="search"
          placeholder="Search for an ingredient"
        />
      </InputWithIcon>

      <ul className={styles.Blacklist}>
        <li className={styles.Item}>
          {/* <Tag checked style="negative"> */}
          {/*   Peanuts */}
          {/* </Tag> */}
        </li>
      </ul>
    </section>
  );
};
