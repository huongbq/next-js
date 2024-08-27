import getListOfBlogs from "@/services/getListOfBlogs";
import BlogOverView from "../components/blog-overview";

async function Blogs() {
  const blogList = await getListOfBlogs();

  return <BlogOverView blogList={blogList} />;
}

export default Blogs;
