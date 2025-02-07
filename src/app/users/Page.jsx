"use client";
import React, { useState, useEffect } from "react";
import { Alert, Loading, SearchBar, UserCard } from "@/components";
import { useRouter } from 'next/navigation';
import { fetchUsers } from "@/utils/api";

function UsersPage() {
  // State variables
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // Search state
  const router = useRouter();

  // Fetch users on component mount
  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      try {
        const data = await fetchUsers();
        if (data.length === 0) throw new Error("No users found");
        setUsers(data);
      } catch (err) {
        setError("Error on fetching Users data");
      } finally {
        setIsLoading(false);
      }
    };
    loadUsers();
  }, []);

  // Debouncing input value
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 500);

    return () => clearTimeout(handler); // Cleanup function to cancel timeout
  }, [inputValue]);

  // Filter users based on searchQuery
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show loading spinner if data is being fetched
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen pb-20 mx-auto max-w-4xl">
      {/* Show error alert if there is an error */}
      {error && <Alert message={error} alertType="Error" />}
      {/* Back button */}
      <button onClick={() => router.back()} title="back" className="dark:text-gray-300 text-gray-600 text-4xl ml-6 mt-6">&#8676;</button>
      {/* Search bar */}
      <div className="my-16 flex justify-center">
        <SearchBar
          placeholder="search by name or email"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      {/* User cards */}
      <div className="grid justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} data={user} />)
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300">
            No users found.
          </p>
        )}
      </div>
    </div>
  );
}

export default UsersPage;
