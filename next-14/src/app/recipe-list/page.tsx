import React from "react";
import RecipeList from "../components/recipe-list";
import UserServices from "@/services/getUser";

export default async function Recipes() {
  const recipeList = await UserServices.getRecipes();
  return (
    <div>
      <RecipeList recipeList={recipeList} />
    </div>
  );
}
