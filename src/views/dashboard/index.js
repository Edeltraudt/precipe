import React, { useEffect, useState } from "react";

import API from "../../utility/api";

import Recipes from "../../components/recipes/view/recipes";

import styles from "./dashboard.module.scss";

const DashboardView = (props) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    API.get(`api/recipes`)
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className={styles.Recipes}>
      <Recipes recipes={recipes} />
    </div>
  );
};

export default DashboardView;
