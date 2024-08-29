import dbConnect from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const getCurrentBlogId = searchParams.get("id");

    if (!getCurrentBlogId) {
      return NextResponse.json({
        success: false,
        message: "Blog ID is required",
      });
    }

    const { title, description } = await req.json();

    if (!title || !description) {
      return NextResponse.json({
        success: false,
        message: "Title and description are required",
      });
    }

    const updateBlogById = await Blog.findByIdAndUpdate(
      getCurrentBlogId,
      { title, description },
      { new: true }
    );

    if (updateBlogById) {
      return NextResponse.json({
        success: true,
        message: "Blog updated successfully",
        blog: updateBlogById, // Return updated blog if needed
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Blog not found or update failed",
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
