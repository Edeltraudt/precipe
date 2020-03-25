import React, { useState } from "react";
import PropTypes from "prop-types";

import { Headline } from "./../../core/typography";
import Grid from "./../grid";

import styles from "./recipes.module.scss";

const Recipes = props => {
  return (
    <div className={[styles.Wrap]}>
      <Headline level="2">Recipes</Headline>

      <Grid editable recipes={props.recipes} />
    </div>
  );
};

Recipes.propTypes = {
  upcomingEvents: PropTypes.array,
  recipes: PropTypes.array
};

export default Recipes;
