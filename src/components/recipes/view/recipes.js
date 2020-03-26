import React, { useState } from "react";
import PropTypes from "prop-types";

import { Headline } from "./../../core/typography";
import { Tag } from "./../../core";
import Grid from "./../grid";

import styles from "./recipes.module.scss";

const Recipes = ({ upcomingEvents, recipes }) => {
  const handleFilterChange = (isActive, filterId) => {
    console.log(filterId, isActive);
  };

  return (
    <div className={styles.Wrap}>
      <Headline level="2">Recipes</Headline>
      <div className={styles.Tabs}>
        <a href="" className={`${styles.TabButton} ${styles.active}`}>
          Your Recipes
        </a>
        <a href="" className={styles.TabButton}>
          Homies
        </a>
        <a href="" className={styles.TabButton}>
          Groupies
        </a>
      </div>

      <div className={styles.Controls}>
        <div className={styles.Filters}>
          <Tag
            id="filter-vegetarian"
            onChange={val => handleFilterChange("filter-vegetarian", val)}
          >
            Vegetarian
          </Tag>
        </div>

        <div className={styles.Order}>Order by</div>
      </div>

      <Grid editable recipes={recipes} />
    </div>
  );
};

Recipes.propTypes = {
  upcomingEvents: PropTypes.array,
  recipes: PropTypes.array
};

export default Recipes;
