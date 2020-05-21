import React from "react";
import PropTypes from "prop-types";

import { Headline } from "../../core/typography";
import Rating from "./../rating";

import placeholder from "./../../../assets/img/placeholder.jpg";

import styles from "./teaser.module.scss";

// TODO: Get rating
const RecipeTeaser = ({ recipe, groupIcon, onClick }) => (
  <article className={`${styles.Wrap} ${!recipe ? styles.placeholder : ""}`}>
    <figure className={styles.ImageWrap}>
      {recipe !== undefined && (
        <>
          {/* TODO: Optional Group Icon */}
          <img src={placeholder} alt="" className={styles.Image} />
        </>
      )}
    </figure>
    <header className={styles.Header}>
      {!recipe ? (
        <button className={styles.Link} onClick={onClick}>
          <span className={styles.placeholderIcon} />
          <Headline level="4" className={styles.Title}>Create new Recipe</Headline>
        </button>
      ) : (
        <div className={styles.Info}>
          <button className={`expand-click-area ${styles.Link}`} onClick={onClick}>
            <Headline level="4" className={styles.Title}>{recipe.title}</Headline>
          </button>

          <p className={styles.Time}>{recipe.time} min</p>
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
