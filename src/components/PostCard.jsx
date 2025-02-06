import React from "react";

function PostCard({post}) {
    const {title, body} = post || "";
  return (
    <div>
      <div className="border h-72 w-72 p-5  rounded-lg shadow-lg hover:scale-105 transition-all bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
        <h2 className="text-center font-serif mb-6 font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
          {body}
        </p>
      </div>
    </div>
  );
}

export default PostCard;