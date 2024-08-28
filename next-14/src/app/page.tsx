"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/products/1234");
  };
  return (
    <main className="flex flex-col gap-5 items-center justify-between p-24">
      <h1 className=" font-bold text-xl">Welcome to the next JS app</h1>
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
