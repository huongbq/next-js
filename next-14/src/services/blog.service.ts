import axiosInstance from "@/utils/axiosInstance";
import { IBlogProps } from "@/app/components/blog-overview";

const BlogServices = {
  async getBlogs(params: object = {}): Promise<IBlogProps[]> {
    const response = await axiosInstance.get("/api/get-blogs", { params });
    return response.data;
  },
  deleteBlogById(id: string) {
    return axiosInstance.delete(`/api/get-blog/${id}`);
  },
};

export default BlogServices;
