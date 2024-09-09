"use client";

import React from "react";
import RecipeList from "../components/recipe-list";
import Services from "@/services/recipe.service";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default async function Recipes() {
  const recipeList = await Services.getRecipes();
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Recipe</Breadcrumb.Item>
      </Breadcrumb>
      <RecipeList recipeList={recipeList} />
    </div>
  );
}
