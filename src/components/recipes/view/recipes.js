import React, { useState } from "react";
import PropTypes from "prop-types";

import { Headline } from "./../../core/typography";
import { Select } from "./../../core/forms";
import { Icon, Tag } from "./../../core";
import Grid from "./../grid";

import styles from "./recipes.module.scss";

const Recipes = ({ upcomingEvents, recipes }) => {
  const handleFilterChange = (isActive, filterId) => {
    console.log(filterId, isActive);
  };

  const handleOrderChange = selectedOrder => {
    setOrder(selectedOrder);
    console.log(selectedOrder);
  };

  const orderOptions = [
    { value: "last-cooked", label: "Last cooked" },
    { value: "best", label: "Best matched" }
  ];
  const [order, setOrder] = useState(null);

  return (
    <div className={styles.Wrap}>
      <Headline level="2">Recipes</Headline>
      <div className={styles.Tabs}>
        <button href="" className={`${styles.TabButton} ${styles.active}`}>
          Your Recipes
        </button>
        <button href="" className={styles.TabButton}>
          Homies
        </button>
        <button href="" className={styles.TabButton}>
          Groupies
        </button>
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

        <div className={styles.Order}>
          <Icon name="sort" className={styles.OrderIcon} />
          <span>Order by</span>
          <Select
            label="Order by"
            options={orderOptions}
            onChange={handleOrderChange}
            theme="invisible"
            defaultValue={orderOptions[0].value}
          />
        </div>
      </div>

      <Grid editable recipes={recipes} order={order} />
    </div>
  );
};

Recipes.propTypes = {
  upcomingEvents: PropTypes.array,
  recipes: PropTypes.array
};

export default Recipes;
