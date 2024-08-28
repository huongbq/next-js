import React from "react";
import Link from "next/link";

export default function AccountsPage() {
  return (
    <div className="flex flex-col w-96 p-10 justify-between items-center gap-3">
      <h1>Accounts Page</h1>
      <Link href="/" className="bg-green-400 p-5 rounded-full">
        Back Home
      </Link>
    </div>
  );
}
