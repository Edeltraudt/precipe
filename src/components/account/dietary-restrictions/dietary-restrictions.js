import React, { useContext } from "react";
import PropTypes from "prop-types";

import UserContext from "./../../../contexts/user-context";

import DietaryItem from "./dietary-item";
import { Headline } from "./../../../components/core/typography";

import * as styles from "./dietary-restrictions.module.scss";

const dietaryRestrictions = [
  { id: 1, label: "Pork" },
  { id: 2, label: "Poultry" },
  { id: 3, label: "Beef" },
  { id: 4, label: "Fish" },
  { id: 5, label: "Lactose" },
  { id: 6, label: "Wheat" },
  { id: 7, label: "Eggs" }
];

const DietaryRestrictions = ({ className }) => {
  const user = useContext(UserContext);

  return (
    <>
      <Headline level="2" type="subheadline">
        Dietary restrictions and preferences
      </Headline>
      <p>Select all food groups that you like to eat.</p>
      <div className={styles.Grid}>
        {/* TODO: save change to user */}
        {dietaryRestrictions.map(item => (
          <DietaryItem
            key={item.id}
            label={item.label}
            checked={user.dietaryRestrictions && user.dietaryRestrictions.includes(item.id)}
            onChange={console.log}
          />
        ))}
      </div>
    </>
  );
};

DietaryRestrictions.propTypes = {
  className: PropTypes.string
};

export default DietaryRestrictions;
