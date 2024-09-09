"use client";

import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function CartPage() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Cart</Breadcrumb.Item>
      </Breadcrumb>
      <h1>this is the cart</h1>
    </div>
  );
}
