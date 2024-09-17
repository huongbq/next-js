"use client";

import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function ProductsPage() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Products</Breadcrumb.Item>
      </Breadcrumb>
      Products Page
    </div>
  );
}
