import fetchUserDetails from "@/services/getUserDetail";
import React from "react";

export default async function UserDetails({ params }: any) {
  const userDetails = await fetchUserDetails(params.details);

  return userDetails ? (
    <div>
      <h1>
        {userDetails?.firstName} {userDetails?.lastName}
      </h1>
      <h1>{userDetails?.age}</h1>
      <h1>{userDetails?.email}</h1>
    </div>
  ) : (
    <div>Error loading user details</div>
  );
}
