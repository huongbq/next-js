import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function AccountsPage() {
  const accountInfo = null;
  if (accountInfo === null) redirect("/profile");

  return (
    <div className="flex flex-col w-96 p-10 justify-between items-center gap-3">
      <h1>Accounts Page</h1>
      <Link href="/" className="bg-green-400 p-5 rounded-full">
        Back Home
      </Link>
    </div>
  );
}
