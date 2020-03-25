import React from "react";
import PropTypes from "prop-types";

import { Headline } from "../../core/typography";
import Rating from "./../rating";

import styles from "./teaser.module.scss";

const RecipeTeaser = props => (
  <article
    className={`${styles.Wrap} ${!props.recipe ? styles.placeholder : ""}`}
  >
    <figure className={styles.ImageWrap}>
      {props.recipe !== undefined && (
        <>
          {/* TODO: Optional Group Icon */}
          <img
            src="https://via.placeholder.com/320x380"
            alt=""
            className={styles.Image}
          />
        </>
      )}
    </figure>
    <header className={styles.Title}>

      {props.placeholder ? (
        <button className={`expand-link ${styles.Link}`} onClick={props.onClick}>
      {!props.recipe ? (
        <button className={styles.Link} onClick={props.onClick}>

          <span className={styles.placeholderIcon} />
          <Headline level="4">Create new Recipe</Headline>
        </button>
      ) : (
        <div className={styles.Info}>

          <a className={`expand-link ${styles.Link}`} onClick={props.onClick}>
            <Headline level="4">Simple beet carpaccio with mixed herbs</Headline>
          <a className={styles.Link} onClick={props.onClick}>
            <Headline level="4">{props.recipe.title}</Headline>

          </a>

          <p className={styles.Time}>20 min</p>
          <Rating value={3} />
        </div>
      )}
    </header>
  </article>
);

RecipeTeaser.propTypes = {
  recipe: PropTypes.any,
  groupIcon: PropTypes.element,
  onClick: PropTypes.func.isRequired
};

export default RecipeTeaser;
