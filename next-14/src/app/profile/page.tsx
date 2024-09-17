"use client";

import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function ProfilePage() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Profile</Breadcrumb.Item>
      </Breadcrumb>
      <h1>this is the profile</h1>
    </div>
  );
}
