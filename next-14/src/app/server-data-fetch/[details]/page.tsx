import fetchUserDetails from "@/services/getUserDetail";
import React from "react";

export default async function UserDetails({ params }: any) {
  const userDetails = await fetchUserDetails(params.details);

  if (!userDetails) {
    return <div>Error loading user details</div>;
  }

  return (
    <div>
      <h1>
        {userDetails?.firstName} {userDetails?.lastName}
      </h1>
      <h1>{userDetails?.age}</h1>
      <h1>{userDetails?.email}</h1>
    </div>
  );
}
