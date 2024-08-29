import UserServices from "@/services/getUser";
import Link from "next/link";
import React from "react";

export default async function UserDetails({ params }: any) {
  const response = await UserServices.getRecipeDetail(params.details);
  const recipeDetails = response.data;

  return recipeDetails ? (
    <div className="p-10 mx-auto">
      <div className="mb-10">
        <Link
          href={"/recipe-list"}
          className="mb-10 p-3 rounded-2xl bg-slate-400">
          {`<--`} go to Recipe list
        </Link>
      </div>
      <div className="flex gap-8">
        <img
          src={recipeDetails?.image}
          alt={recipeDetails?.name}
          className="rounded-lg object-cover w-1/4"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            {recipeDetails?.name}
          </h2>
          <div className="flex flex-wrap gap-4 mt-5">
            <p className="text-2xl text-gray-700">
              Used for: {recipeDetails?.mealType[0]}
            </p>
          </div>
          <div className="mt-5">
            <p className="text-xl text-gray-800">
              From: {recipeDetails?.cuisine}
            </p>
          </div>
          <div className="mt-5">
            <h3 className="text-3xl font-bold text-gray-700">Ingredients</h3>
            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
              {recipeDetails?.ingredients.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Error loading user details</div>
  );
}
