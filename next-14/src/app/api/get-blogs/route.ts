import dbConnect from "@/database/index";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  try {
    const blogs = await Blog.find();
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
