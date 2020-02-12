import React, { useState } from "react";
import PropTypes from "prop-types";

import { Headline } from "./../../core/headline/headline";
import { Grid } from "./../grid/grid";

import styles from "./recipes.module.scss";

const Recipes = props => {
  return (
    <div className={[styles.Wrap]}>
      <Headline level="2">Recipes</Headline>
      <Grid editable />
    </div>
  );
};

Recipes.propTypes = {
  upcomingEvents: PropTypes.array
};

export default Recipes;
