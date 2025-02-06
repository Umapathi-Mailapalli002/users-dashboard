import PostCard from "@/components/PostCard";
import React from "react";

function UserPosts() {
  const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
      {/* User Information Card */}
      {/* Profile Header */}
      <div className="flex flex-col items-center mb-8">
          <img
            src={`https://i.pravatar.cc/150?u=${user.id}`} // Random avatar
            alt="User Avatar"
            className="w-24 h-24 rounded-full shadow-md"
          />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mt-3">
            {user.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">@{user.username}</p>
        </div>
      <div className="border-b border-gray-700 pb-4 mb-4">
        <ul className="grid grid-cols-2 gap-4 text-lg">
          <li>
            <span className="font-semibold">ID:</span> {user.id}
          </li>
          <li>
            <span className="font-semibold">Email:</span> {user.email}
          </li>
          <li>
            <span className="font-semibold">Contact:</span> {user.phone}
          </li>
          <li>
            <span className="font-semibold">Website:</span>{" "}
            <a
              href={`https://${user.website}`}
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </li>
        </ul>
      </div>

      {/* Address Section */}
      <div className="border-b border-gray-700 pb-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Address</h2>
        <p>
          {user.address.suite}, {user.address.street}, {user.address.city} -{" "}
          {user.address.zipcode}
        </p>
        <p className="text-gray-400">
          Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
        </p>
      </div>

      {/* Company Section */}
      <div className="border-b border-gray-700 pb-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Company</h2>
        <p className="font-semibold">{user.company.name}</p>
        <p className="italic text-gray-300">"{user.company.catchPhrase}"</p>
        <p className="text-gray-400">{user.company.bs}</p>
      </div>

      {/* User Posts Section */}
      <h3 className="text-2xl font-bold text-center my-6">Posts</h3>
      <div className="flex flex-wrap gap-4 justify-center">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}

export default UserPosts;
