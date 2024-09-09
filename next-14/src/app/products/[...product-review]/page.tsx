"use client";

import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function ProductReview() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item active>Product review</Breadcrumb.Item>
      </Breadcrumb>
      this is the product review
    </div>
  );
}
