"use client";

import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function AccountsPage() {
  return (
    <div className="flex flex-col w-96 p-10 justify-between items-center gap-3">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Accounts</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Accounts Page</h1>
    </div>
  );
}
