import { IProducts, ProductListProps } from "@/types/product.type";
import { axiosUser } from "@/utils/axiosInstance";
import { AxiosResponse } from "axios";

const ProductService = {
  getListOfProduct(
    params: object = {}
  ): Promise<AxiosResponse<ProductListProps>> {
    return axiosUser.get("/products", { params });
  },
  getProductDetail(id: string): Promise<AxiosResponse<IProducts>> {
    return axiosUser.get(`/products/${id}`);
  },
};

export default ProductService;
