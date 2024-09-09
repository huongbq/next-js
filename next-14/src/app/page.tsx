"use client";

import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/auth/sign-in");
    } else {
      try {
        const decodedToken = jwtDecode(token) as any;
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp && decodedToken.exp < currentTime) {
          localStorage.removeItem("token");
          router.push("/auth/sign-in");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        router.push("/auth/sign-in");
      }
    }
  }, [router]);

  const handleNavigate = () => {
    router.push("/products/1234");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.refresh();
  };

  return (
    <main className="h-full flex flex-col gap-5 items-center justify-between p-24 bg-gradient-to-r from-yellow-500 to-red-500">
      <h1 className=" font-bold text-xl">Welcome to the next JS app</h1>
      <button
        onClick={handleLogout}
        className="bg-orange-400 p-5 rounded-full text-white">
        Log out
      </button>
      <Link href={"blogs"} className="bg-green-500 p-5 rounded-full text-white">
        View blog overview
      </Link>
      <Link
        href={"/recipe-list"}
        className="p-5 rounded-full text-white bg-rose-600">
        go to Recipe list
      </Link>
      <Link
        href="/accounts"
        className="bg-slate-400 p-5 rounded-full text-white">
        View Accounts
      </Link>
      <Link
        href="/products"
        className="bg-purple-300 p-5 rounded-full text-white">
        View Products
      </Link>
      <Link
        href="/profile"
        className="bg-yellow-400 p-5 rounded-full text-white">
        View profile
      </Link>
      <button
        className="bg-blue-400 p-5 rounded-full text-white"
        onClick={handleNavigate}>
        View detail
      </button>
      <Link href="/cart" className="bg-red-400 p-5 rounded-full text-white">
        View cart
      </Link>
    </main>
  );
}
