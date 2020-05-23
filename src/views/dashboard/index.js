import React, { useEffect, useState } from "react";

import API from "../../utility/api";

import Recipes from "../../components/recipes/view/recipes";

import styles from "./dashboard.module.scss";

const DashboardView = (props) => {
  const [recipes, setRecipes] = useState([]);

  const getUserRecipes = () => {
    API.get(`api/recipes`)
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error(err));
  }

  const changeRecipeGroup = (groupId) => {
    if (groupId) {
      API.get(`api/recipes/group/${groupId}`)
        .then((res) => setRecipes(res.data))
        .catch((err) => console.error(err));
    } else {
      getUserRecipes();
    }
  };

  const changeRecipeFilter = (filterId, isActive) => {};

  const changeRecipeOrder = (selectedOrder) => {};

  useEffect(() => {
    getUserRecipes();
  }, []);

  return (
    <div className={styles.Recipes}>
      <Recipes
        recipes={recipes}
        onGroupChange={changeRecipeGroup}
        onFilterChange={changeRecipeFilter}
        onOrderChange={changeRecipeOrder}
      />
    </div>
  );
};

export default DashboardView;
