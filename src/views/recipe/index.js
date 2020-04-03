import React from "react";
import { useParams } from "react-router-dom";

import { RecipeIngredient } from "./../../components/recipes";
import { UserIconGroup } from "./../../components/user/icons";
import { Headline } from "./../../components/core/typography";
import { Icon } from "./../../components/core";

import placeholder from "./../../assets/img/recipe-detail-placeholder.jpg";

import styles from "./recipe.module.scss";

const recipes = [
  {
    id: 1,
    title: "Simple beet carpaccio with mixed herbs",
    duration: 20,
    servings: 4,
    ingredients: [
      { name: "red beets", amount: 4, unit: null },
      { name: "red onion", amount: 1, unit: null },
      { name: "mixed herbs", amount: 20, unit: "g" },
      { name: "olive oil", amount: 50, unit: "g" },
      { name: "lemon", amount: 1, unit: null },
      { name: "sugar", amount: 1, unit: "tsb" },
      { name: "flaky sea salt", amount: null, unit: null }
    ],
    instructions:
      "<p>Peel, halve, and thinly slice red onion. Remove leaves from herb stems and mince. Zest and juice lemon and add to a bowl with olive oil, sugar, capers, and salt. Season with pepper and mix well.</p><p>Peel and thinly slice beetroots with a mandoline. Add to bowl with the dressing and mix.</p><p>Layer beets on a plate and drizzle with olive oil. Garnish with flaky sea salt and more mixed herbs. Enjoy!</p>"
  },
  {
    id: 2,
    title: "Simple beet carpaccio with mixed herbs 2",
    duration: 20,
    servings: 4,
    ingredients: [{ name: "red beets", amount: 4, unit: null }],
    instructions:
      "<p>Peel, halve, and thinly slice red onion. Remove leaves from herb stems and mince. Zest and juice lemon and add to a bowl with olive oil, sugar, capers, and salt. Season with pepper and mix well.</p><p>Peel and thinly slice beetroots with a mandoline. Add to bowl with the dressing and mix.</p><p>Layer beets on a plate and drizzle with olive oil. Garnish with flaky sea salt and more mixed herbs. Enjoy!</p>"
  }
];

const RecipeView = props => {
  const { id } = useParams();

  let recipe;

  if (!Number.isNaN(id)) {
    recipe = recipes.find(recipe => recipe.id === Number(id));
    recipe.image = placeholder;
  }

  return (
    <div className={styles.Recipe}>
      {recipe && (
        <>
          <header className={styles.Header}>
            <Headline level="2" type="title">
              {recipe.title}
            </Headline>
            <div className={styles.Info}>
              <UserIconGroup editable groupId={1} />
            </div>
          </header>
          <div className={styles.Main}>
            <div className={styles.ImageWrap}>
              <figure className={styles.Image}>
                <img src={recipe.image} alt="" />
              </figure>
            </div>
            <section className={`${styles.Ingredients} card`}>
              <header className={`${styles.IngredientsHeader} card__header`}>
                <div className={styles.IngredientsHeaderWrap}>
                  <Headline level="3" type="label">
                    Ingredients
                  </Headline>

                  <button className={styles.Duplicate}>
                    <Icon name="plus" className={styles.DuplicateIcon} />
                    <span>Fork this recipe</span>
                  </button>
                </div>
              </header>
              <ul className={styles.IngredientsList}>
                {recipe.ingredients.map((ingredient, index) => (
                  <li className={styles.IngredientsItem} key={index}>
                    <RecipeIngredient
                      qty={ingredient.amount}
                      unit={ingredient.unit}
                      name={ingredient.name}
                    />
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <section className={styles.Preparation}>
            <Headline level="3" type="label">
              Preparation
            </Headline>
            <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
          </section>
        </>
      )}
    </div>
  );
};

export default RecipeView;
