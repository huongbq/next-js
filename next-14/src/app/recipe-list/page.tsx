import fetchListOfRecipes from "@/services/getRecipe";
import React from "react";
import RecipeList from "../components/recipe-list";

export default async function Recipes() {
  const recipeList = await fetchListOfRecipes();
  return (
    <div>
      <RecipeList recipeList={recipeList} />
    </div>
  );
}
