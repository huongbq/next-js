"use client";

import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
export default function MembershipsInfo() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/accounts">Accounts</Breadcrumb.Item>
        <Breadcrumb.Item href="/memberships">Memberships</Breadcrumb.Item>
        <Breadcrumb.Item active>Memberships Info</Breadcrumb.Item>
      </Breadcrumb>
      this is the membership info
    </div>
  );
}
