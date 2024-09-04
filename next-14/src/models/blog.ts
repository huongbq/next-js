import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
export default Blog;
