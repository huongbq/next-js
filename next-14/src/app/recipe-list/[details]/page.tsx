/* eslint-disable @next/next/no-img-element */
"use client";

import Services from "@/services/recipe.service";
import React, { useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function UserDetails({ params }: any) {
  const [recipeDetail, setRecipeDetail] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      setLoading(true);
      try {
        if (params.details) {
          const response = await Services.getRecipeDetail(params.details);
          setRecipeDetail(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch recipe details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetail();
  }, [params.details]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return recipeDetail ? (
    <div className="p-10 mx-auto">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/recipe-list">Recipe</Breadcrumb.Item>
        <Breadcrumb.Item active>{recipeDetail?.name}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="flex gap-8 mt-10">
        <img
          src={recipeDetail?.image}
          alt={recipeDetail?.name}
          className="rounded-lg object-cover w-2/4"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            {recipeDetail?.name}
          </h2>
          <div className="flex flex-wrap gap-4 mt-5">
            <p className="text-2xl text-gray-700">
              Used for: {recipeDetail?.mealType[0]}
            </p>
          </div>
          <div className="mt-5">
            <p className="text-xl text-gray-800">
              From: {recipeDetail?.cuisine}
            </p>
          </div>
          <div className="mt-5">
            <h3 className="text-3xl font-bold text-gray-700">Ingredients</h3>
            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
              {recipeDetail?.ingredients.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Error loading recipe details</div>
  );
}
