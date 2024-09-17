"use client";

import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function Memberships() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/accounts">Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Memberships</Breadcrumb.Item>
      </Breadcrumb>
      this is the membership
    </div>
  );
}
