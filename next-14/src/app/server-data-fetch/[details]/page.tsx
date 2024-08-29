import UserServices from "@/services/getUser";
import React from "react";

export default async function UserDetails({ params }: any) {
  try {
    const response = await UserServices.getUserDetail(params.details);
    const userDetails = response.data;

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
  } catch (error) {
    console.error("Error fetching user details:", error);
    return <div>Error loading user details</div>;
  }
}
