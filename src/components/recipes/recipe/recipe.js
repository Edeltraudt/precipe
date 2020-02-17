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
    <figure className={styles.ImageWrap}>
      {!props.placeholder && (
        <>
          {/* Optional Group Icon */}
          <img src="https://via.placeholder.com/320x380" alt="" className={styles.Image} />
        </>
      )}
    </figure>
    <header className={styles.Title}>
      {props.placeholder ? (
        <button className={styles.Link} onClick={props.onClick}>
          <span className={styles.placeholderIcon} />
          <Headline level="4">Create new Recipe</Headline>
        </button>
      ) : (
        <div className={styles.Info}>
          <a className={styles.Link} onClick={props.onClick}>
            <Headline level="4">Simple beet carpaccio with mixed herbs</Headline>
          </a>

          <p className={styles.Time}>20 min</p>
          <button className={styles.Like} aria-label="Like this recipe" />
        </div>
      )}
    </header>
  </article>
);

Recipe.propTypes = {
  groupIcon: PropTypes.element,
  placeholder: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};
