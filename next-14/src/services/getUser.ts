import { AxiosResponse } from "axios";
import { axiosUser } from "./request";

const UserServices = {
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

export default UserServices;
