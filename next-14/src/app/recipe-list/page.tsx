/* eslint-disable @next/next/no-async-client-component */
"use client";

import React, { useEffect, useState } from "react";
import RecipeList from "../components/recipe-list";
import Services from "@/services/recipe.service";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { RecipeProps } from "@/types/recipe.type";

export default function Recipes() {
  const [loading, setLoading] = useState<boolean>(false);
  const [recipeList, setRecipeList] = useState<RecipeProps>();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const response = await Services.getRecipes();
        setRecipeList(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch recipe details:", error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="p-5">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Recipe</Breadcrumb.Item>
      </Breadcrumb>
      <RecipeList recipeList={recipeList} loading={loading} />
    </div>
  );
}
