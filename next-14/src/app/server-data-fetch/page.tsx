import UserServices from "@/services/getUser";
import Link from "next/link";
import React from "react";
// import useSWR from "swr";

export default async function ServerSideDataFetching() {
  // const fetcher = (...args: any) => fetch(...args).then((res) => res.json());
  // const { data, error, isLoading } = useSWR(
  //   "https://dummyjson.com/users",
  //   fetcher
  // );
  try {
    const response = await UserServices.getUsers();
    const listOfUsers = response.data;

    return (
      <div className="p-10">
        <h1>Server side data fetching: User List Page</h1>
        <ul>
          {listOfUsers && listOfUsers.length > 0 ? (
            listOfUsers.map((user: any) => (
              <li key={user.id} className="mt-5">
                <Link href={`/server-data-fetch/${user.id}`}>
                  {user.firstName}
                </Link>
              </li>
            ))
          ) : (
            <li>No users found</li>
          )}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error fetching user list:", error);
    return <div>Error loading user list</div>;
  }
}
