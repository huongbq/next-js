import fetchListOfUsers from "@/services/getUser";
import Link from "next/link";
import React from "react";

export default async function ServerSideDataFetching() {
  const listOfUsers = await fetchListOfUsers();
  console.log([listOfUsers]);
  return (
    <div className="p-10">
      <h1>Server side data fetching : User List Page</h1>
      <ul>
        {listOfUsers && listOfUsers.length > 0
          ? listOfUsers.map((user: any) => (
              <li key={user.id} className="mt-5">
                <Link href={`/server-data-fetch/${user.id}`}>
                  {user.firstName}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
