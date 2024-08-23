"use client";

import useSWR from "swr";
// first returns the data from cache (stale), then sends the request (revalidate), and finally comes with the up-to-date data again.

const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

export default function ClientSideDataFetching() {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/users",
    fetcher
  );

  if (error) {
    return <h1>Fail to load</h1>;
  }

  if (isLoading)
    return (
      <h3 className="font-bold text-green-300">loading user! PLEASE WAIT</h3>
    );

  return (
    <div>
      <h1>Client-side Data Fetching</h1>
      <div>
        {data && data.users && data.users.length > 0 ? (
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                {Object.keys(data.users[0]).map((key) => (
                  <th key={key} className="border border-gray-400 px-4 py-2">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.users.map((user: any) => (
                <tr key={user.id}>
                  {Object.values(user).map((value, idx) => (
                    <td key={idx} className="border border-gray-400 px-4 py-2">
                      {JSON.stringify(value)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}
