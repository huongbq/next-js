import { axiosUser } from "@/utils/axiosInstance";
import { AxiosResponse } from "axios";

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
