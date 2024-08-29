import dbConnect from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const getCurrentBlogId = searchParams.get("id");

    if (!getCurrentBlogId) {
      return NextResponse.json({
        success: false,
        message: "Blog id is required",
      });
    }

    const existingBlog = await Blog.findById(getCurrentBlogId);
    if (!existingBlog) {
      return NextResponse.json({
        success: false,
        message: "Blog not found",
      });
    }

    const deleteCurrentBlogById = await Blog.findByIdAndDelete(
      getCurrentBlogId
    );
    if (deleteCurrentBlogById) {
      return NextResponse.json({
        success: true,
        message: "Blog deleted successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to delete blog. Please try again.",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Server error! Please try again later.",
    });
  }
}
