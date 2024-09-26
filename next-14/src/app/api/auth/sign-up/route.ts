import dbConnect from "@/database";
import User from "@/models/user";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { username, email, password } = body;

    await dbConnect();

    let user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ msg: "User already exists" }, { status: 400 });
    }

    user = new User({
      username,
      email,
      password,
    });

    await user.save();

    if (!process.env.NEXT_PUBLIC_JWT_SECRET) {
      return NextResponse.json(
        { msg: "JWT secret is not set" },
        { status: 500 }
      );
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.NEXT_PUBLIC_JWT_SECRET as string,
      {
        expiresIn: "1h",
      }
    );

    return NextResponse.json({ accessToken: token }, { status: 201 });
  } catch (error) {
    console.error("Error during sign up:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
