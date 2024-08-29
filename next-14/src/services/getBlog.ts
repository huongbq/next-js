import { axiosBlog } from "./request";
import { IBlogProps } from "@/app/components/blog-overview";

const BlogServices = {
  async getBlogs(params: object = {}): Promise<IBlogProps[]> {
    const response = await axiosBlog.get("/api/get-blogs", { params });
    return response.data;
  },
  deleteBlogById(id: string) {
    return axiosBlog.delete(`/api/get-blog/${id}`);
  },
};

export default BlogServices;
