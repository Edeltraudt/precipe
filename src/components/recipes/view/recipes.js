import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import API from "./../../../utility/api";
import UserContext from "./../../../contexts/user-context";

import { Headline } from "./../../core/typography";
import { Select } from "./../../core/forms";
import { Icon, Tag } from "./../../core";
import Grid from "./../grid";

import styles from "./recipes.module.scss";

const Recipes = ({ upcomingEvents, recipes }) => {
  const { user } = useContext(UserContext);

  const [order, setOrder] = useState(null);

  const handleGroupChange = (groupId) => {
    if (groupId) {
      console.log("Switch recipe view to only recipes of group", groupId);
    } else {
      console.log("Show all recipes");
    }
  };

  const handleFilterChange = (filterId, isActive) => {
    console.log(filterId, isActive);
  };

  const handleOrderChange = (selectedOrder) => {
    setOrder(selectedOrder);
    console.log(selectedOrder);
  };

  const orderOptions = [
    { value: "last-cooked", label: "Last cooked" },
    { value: "best", label: "Best matched" },
  ];

  return (
    <div className={styles.Wrap}>
      <Headline level="2">Recipes</Headline>

      <div className={styles.Tabs}>
        <button
          className={`${styles.TabButton} ${styles.active}`}
          onClick={(e) => handleGroupChange(null)}
        >
          Your Recipes
        </button>
        {user.groups.map((group) => (
          <button
            className={styles.TabButton}
            id={`tab-group-${group.id}`}
            onClick={(e) => handleGroupChange(group.id)}
            key={group.id}
          >
            {group.title}
          </button>
        ))}
      </div>

      <div className={styles.Controls}>
        <div className={styles.Filters}>
          <Tag
            id="filter-vegetarian"
            onChange={(val) => handleFilterChange("filter-vegetarian", val)}
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
  recipes: PropTypes.array,
};

export default Recipes;
