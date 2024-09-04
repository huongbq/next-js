import axios, { AxiosResponse } from "axios";

export const axiosUser = axios.create({
  baseURL: process.env.URL_USER,
  headers: {
    "Content-Type": "application/json",
  },
});

const RecipeServices = {
  getUsers(params: object = {}): Promise<AxiosResponse<any>> {
    return axiosUser.get("/users", { params });
  },
  getUserDetail(id: string): Promise<AxiosResponse<any>> {
    return axiosUser.get(`/users/${id}`);
  },
  getRecipes(params: object = {}): Promise<AxiosResponse<any>> {
    return axiosUser.get("/recipes", { params });
  },
  getRecipeDetail(id: string): Promise<AxiosResponse<any>> {
    return axiosUser.get(`/recipes/${id}`);
  },
};

export default RecipeServices;
