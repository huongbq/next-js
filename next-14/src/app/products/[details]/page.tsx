"use client";

import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function ProductsDetail() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item active>Product Detail</Breadcrumb.Item>
      </Breadcrumb>
      this is product detail
    </div>
  );
}
