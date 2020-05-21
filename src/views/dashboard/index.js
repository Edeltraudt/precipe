import React, { useState } from "react";

import Recipes from "../../components/recipes/view/recipes";

import styles from "./dashboard.module.scss";

const mockRecipes = [
  {
    id: 1,
    title: "Simple beet carpaccio with mixed herbs",
    duration: 20,
    servings: 4,
    ingredients: [
      {
        id: 1,
        amount: 4,
        unit: null
      }
    ],
    instructions:
      "<p>Peel, halve, and thinly slice red onion. Remove leaves from herb stems and mince. Zest and juice lemon and add to a bowl with olive oil, sugar, capers, and salt. Season with pepper and mix well.</p><p>Peel and thinly slice beetroots with a mandoline. Add to bowl with the dressing and mix.</p><p>Layer beets on a plate and drizzle with olive oil. Garnish with flaky sea salt and more mixed herbs. Enjoy!</p>"
  },
  {
    id: 2,
    title: "Simple beet carpaccio with mixed herbs 2",
    duration: 20,
    servings: 4,
    ingredients: [
      {
        id: 1,
        amount: 4,
        unit: null
      }
    ],
    instructions:
      "<p>Peel, halve, and thinly slice red onion. Remove leaves from herb stems and mince. Zest and juice lemon and add to a bowl with olive oil, sugar, capers, and salt. Season with pepper and mix well.</p><p>Peel and thinly slice beetroots with a mandoline. Add to bowl with the dressing and mix.</p><p>Layer beets on a plate and drizzle with olive oil. Garnish with flaky sea salt and more mixed herbs. Enjoy!</p>"
  }
];

const DashboardView = (props) => {
  const [recipes, setRecipes] = useState(mockRecipes);

  return (
    <div className={styles.Recipes}>
      <Recipes recipes={recipes} />
    </div>
  );
};

export default DashboardView;
