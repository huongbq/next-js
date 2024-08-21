import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <Link href={"/"}>Go back</Link>
    </div>
  );
}
