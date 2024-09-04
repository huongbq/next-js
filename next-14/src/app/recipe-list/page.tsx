import React from "react";
import RecipeList from "../components/recipe-list";
import Services from "@/services/recipe.service";

export default async function Recipes() {
  const recipeList = await Services.getRecipes();
  return (
    <div>
      <RecipeList recipeList={recipeList} />
    </div>
  );
}
