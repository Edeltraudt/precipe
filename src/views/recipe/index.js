import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import API from "../../utility/api";

import { RecipeIngredient } from "./../../components/recipes";
import { UserIconGroup } from "./../../components/user/icons";
import { Headline } from "./../../components/core/typography";
import { Icon } from "./../../components/core";

import placeholder from "./../../assets/img/recipe-detail-placeholder.jpg";

import styles from "./recipe.module.scss";

const RecipeView = (props) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(undefined);

  const handleForkRecipe = () => {
    console.log("Fork this recipe");
  };

  useEffect(() => {
    API.get(`api/recipes/${id}`)
      .then((res) => {
        res.data.image = placeholder;
        setRecipe(res.data);
      })
      .catch(console.error);
  }, [id]);

  return (
    <div className={styles.Recipe}>
      {recipe && (
        <>
          <header className={styles.Header}>
            <Headline level="2" type="title">
              {recipe.title}
            </Headline>
            <div className={styles.Info}>
              <UserIconGroup
                members={recipe.members}
                editable
              />
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

                  <button
                    className={styles.Duplicate}
                    onClick={handleForkRecipe}
                  >
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
                      name={ingredient.title}
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
