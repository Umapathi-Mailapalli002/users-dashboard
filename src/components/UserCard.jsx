import React from "react";
import { CgProfile } from "react-icons/cg";

function UserCard({data}) {
    const {name, id, email, address, company} = data;
  return (
    <div className="border h-72 w-64 p-2 rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-300">
      {/* Top Gradient Section */}
      <div className="h-16 flex justify-center items-center bg-gradient-to-b from-[#91baff] to-[#205fff] dark:from-indigo-800 dark:to-indigo-900">
        <div className="mt-16 rounded-full bg-gray-200 dark:bg-gray-500 p-px">
          <CgProfile className="text-8xl text-gray-600 dark:text-gray-300" />
        </div>
      </div>

      {/* User Details Section */}
      <div className="mt-16 text-center text-sm">
        <p className="mt-2 text-gray-700 dark:text-gray-300">ID: {id}</p>{" "}
        <h3 className="font-semibold">{"👤"+name}</h3>
        <p className="text-gray-600 dark:text-gray-300">
          {"📧 "+email}
        </p>
        <p className="text-gray-500 dark:text-gray-400">
        📍{address?.street} Street, {address?.suite}, {address?.city}, {address?.zipcode}
          </p>
        <p className="text-blue-500 dark:text-blue-200">{"💼 "+company?.name}</p>
        
      </div>
    </div>
  );
}

export default UserCard;
