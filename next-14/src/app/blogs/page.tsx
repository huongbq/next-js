import BlogOverView from "../components/blog-overview";
import BlogServices from "@/services/blog.service";

async function Blogs() {
  const blogList = await BlogServices.getBlogs();

  return <BlogOverView blogList={blogList} />;
}

export default Blogs;
