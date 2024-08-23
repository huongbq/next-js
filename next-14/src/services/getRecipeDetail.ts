export default async function fetchRecipeDetails(currentRecipeId: number) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );
    const result = await apiResponse.json();
    return result;
  } catch (e) {
    throw new Error("Failed to fetch recipe details");
  }
}
