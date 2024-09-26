import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dbConnect from "@/database";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { msg: "Email and password are required" },
        { status: 400 }
      );
    }

    await dbConnect();

    const user = await User.findOne({ email });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { msg: "Invalid email or password" },
        { status: 401 }
      );
    }

    if (!process.env.NEXT_PUBLIC_JWT_SECRET) {
      return NextResponse.json(
        { msg: "JWT secret is not set" },
        { status: 500 }
      );
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.NEXT_PUBLIC_JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    const cookie = serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 60 * 60,
      sameSite: "strict",
      path: "/",
    });

    const response = NextResponse.json({ token }, { status: 200 });
    response.headers.set("Set-Cookie", cookie);

    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ msg: "Server error", error }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ msg: "Method not allowed" }, { status: 405 });
}
