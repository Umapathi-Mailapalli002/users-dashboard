"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { Loading, Alert, PostCard, Pagination } from "@/components";
import { fetchUser, fetchUserPosts } from "@/utils/api";

function UserPosts() {
  // State variables
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Router and params
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  // Fetch user and posts data on component mount
  useEffect(() => {
    const loadUser = async () => {
      setIsLoading(true);
      try {
        const data = await fetchUser(id);
        if (data.length === 0) throw new Error("No user found");
        setUser(data[0]);
      } catch (err) {
        setError("Error on fetching User data");
      } finally {
        setIsLoading(false);
      }
    };
    const loadUserPost = async () => {
      setIsLoading(true);
      try {
        const data = await fetchUserPosts(id);
        if (data.length === 0) throw new Error("No Posts found");
        setPosts(data);
      } catch (err) {
        setError("Error on fetching posts of user");
      } finally {
        setIsLoading(false);
      }
    };
    loadUser();
    loadUserPost();
  }, []);

  // Show loading if data is being fetched
  if (isLoading) {
    return <Loading />;
  }

  // Pagination logic
  const pageSize = 5;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = posts?.slice(startIndex, startIndex + pageSize);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg transition-colors duration-300">
      {error && <Alert message={error} alertType="Error" />}
      <button
        onClick={() => router.back()}
        title="back"
        className="dark:text-gray-300 text-gray-600 text-4xl mb-6"
      >
        &#8676;
      </button>
      <div className="flex flex-col items-center mb-5">
        <div className="h-24 mb-10 w-full flex justify-center items-center bg-gradient-to-b from-blue-400 to-blue-600 dark:from-indigo-700 dark:to-indigo-900 rounded-t-lg">
          <div className="mt-20 rounded-full bg-gray-200 dark:bg-gray-500 p-1 shadow-md">
            <CgProfile className="text-8xl text-gray-700 dark:text-gray-300" />
          </div>
        </div>
        <h1 className="text-2xl mt-3 font-bold">{user?.name}</h1>
        <p className="text-gray-600 dark:text-gray-400">@{user?.username}</p>
      </div>

      {/* User Info */}
      <div className="border-b border-gray-300 dark:border-gray-700 pb-4 mb-4">
        <ul className="grid grid-cols-2 gap-4 text-lg">
          <li>
            <span className="font-semibold">ID:</span> {user?.id}
          </li>
          <li>
            <span className="font-semibold">Email:</span> {user?.email}
          </li>
          <li>
            <span className="font-semibold">Contact:</span> {user?.phone}
          </li>
          <li>
            <span className="font-semibold">Website:</span>
            <a
              href={`https://${user?.website}`}
              className="text-blue-500 dark:text-blue-400 hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {user?.website}
            </a>
          </li>
        </ul>
      </div>

      {/* Address Section */}
      <div className="border-b border-gray-300 dark:border-gray-700 pb-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Address</h2>
        <p>
          {user?.address?.suite}, {user?.address?.street}, {user.address?.city}{" "}
          - {user?.address?.zipcode}
        </p>
        <p className="text-gray-500">
          Lat: {user?.address?.geo?.lat}, Lng: {user?.address?.geo?.lng}
        </p>
      </div>

      {/* Company Section */}
      <div className="border-b border-gray-300 dark:border-gray-700 pb-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Company</h2>
        <p className="font-semibold">{user?.company?.name}</p>
        <p className="italic text-gray-500">"{user?.company?.catchPhrase}"</p>
        <p className="text-gray-500">{user?.company?.bs}</p>
      </div>

      {/* User Posts Section */}
      <h3 className="text-3xl font-bold text-center my-6">Posts</h3>
      {paginatedData && paginatedData.length > 0 ? (
        <div className="flex flex-wrap gap-4 justify-center">
          {paginatedData.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-300">
          No users found.
        </p>
      )}
      <Pagination
        totalItems={posts.length}
        pageSize={pageSize}
        onPageChange={(newpage) => setCurrentPage(newpage)}
        currentPage={currentPage}
      />
    </div>
  );
}

export default UserPosts;
