export interface IRecipe {
  id: number;
  name: string;
  image: string;
  ingredients: Array<string>;
  cuisine: string;
  rating: string;
}

export interface RecipeProps {
  recipes: IRecipe[];
  total: string;
  limit: string;
}
