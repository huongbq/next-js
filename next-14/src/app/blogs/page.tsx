import BlogOverView from "../components/blog-overview";
import BlogServices from "@/services/getBlog";

async function Blogs() {
  const blogList = await BlogServices.getBlogs();

  return <BlogOverView blogList={blogList} />;
}

export default Blogs;
