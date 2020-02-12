import React from "react";
import PropTypes from "prop-types";

import { Headline } from "../../core/headline/headline";

import styles from "./recipe.module.scss";

export const Recipe = props => (
  <article
    className={[styles.Wrap, props.placeholder ? styles.placeholder : ""].join(
      " "
    )}
  >
    <div className={styles.ImageWrap}>
      {!props.placeholder && (
        <>
          {/* Optional Group Icon */}
          <img src="" alt="" className={styles.Image} />
          <div className={styles.Info}>
            <p className={styles.Time}>20 min</p>
            <button className={styles.Like} aria-label="Like this recipe" />
          </div>
        </>
      )}
    </div>
    <header className={styles.Title}>
      {props.placeholder ? (
        <button className={styles.Link} onClick={props.onClick}>
          <Headline level="4">Create new Recipe</Headline>
        </button>
      ) : (
        <a className={styles.Link} onClick={props.onClick}>
          <Headline level="4">Simple beet carpaccio with mixed herbs</Headline>
        </a>
      )}
    </header>
  </article>
);

Recipe.propTypes = {
  groupIcon: PropTypes.element,
  placeholder: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};
