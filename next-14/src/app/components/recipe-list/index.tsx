"use client";

import { IRecipe } from "@/types/recipe.type";
import Link from "next/link";
import React from "react";
import Card from "react-bootstrap/Card";

export default function RecipeList({ recipeList }: any) {
  return (
    <div>
      <div className="p-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-8 max-w-fit m-auto">
          {recipeList.recipes.length > 0
            ? recipeList.recipes.map((recipe: IRecipe) => (
                <Link href={`/recipe-list/${recipe.id}`} key={recipe.id}>
                  <Card
                    style={{ width: "18rem" }}
                    className="bg-white rounded-md overflow-hidden shadow-md hover:scale-[1.1] transition-all cursor-pointer w-full p-5 border ">
                    <Card.Img variant="top" src={recipe.image} />
                    <Card.Body>
                      <Card.Title className="my-2 text-gray-600 truncate">
                        {recipe?.name}
                      </Card.Title>
                      <Card.Text className="mb-2 text-gray-600">
                        Rating: {recipe.rating}
                      </Card.Text>
                      <Card.Text className="mb-2 text-gray-600">
                        From: {recipe.cuisine}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
      <h1>total: {recipeList.total}</h1>
      <h1>limit: {recipeList.limit}</h1>
    </div>
  );
}
