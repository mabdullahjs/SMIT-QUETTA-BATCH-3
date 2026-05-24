import Link from "next/link";
import React from "react";

const Users = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users" , {
    next: {
      revalidate: 4000
    }
  });
  const users = await data.json();
  console.log(users);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-lg">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">Users</h1>

          <div className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            {new Date().toLocaleTimeString()}
          </div>
        </div>

        {/* Users List */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((item: { name: string; id: number }) => {
            return (
              <div
                key={item.id}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                {/* Avatar */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">
                  {item.name.charAt(0).toUpperCase()}
                </div>

                {/* User Name */}
                <h2 className="mb-3 text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>

                {/* Button */}
                <Link href={`/users/${item.id}`} className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 active:scale-95">
                  More from this user...
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
