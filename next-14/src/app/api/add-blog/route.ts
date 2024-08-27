import dbConnect from "@/database/index";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const data = await request.json();
    const newBlog = new Blog(data);
    const savedBlog = await newBlog.save();
    return NextResponse.json(savedBlog);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
