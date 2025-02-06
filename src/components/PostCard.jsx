import React from "react";

function PostCard() {
  return (
    <div>
      <div className="border h-72 w-64 p-5  rounded-lg shadow-lg hover:scale-105 transition-all bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
        <h2 className="text-center font-serif mb-6 font-semibold text-gray-800 dark:text-gray-200">
          doloremque illum aliquid sunt
        </h2>
        <p className="text-justify leading-tight text-gray-600 dark:text-gray-400 mt-2">
          deserunt eos nobis asperiores et hic\nest debitis repellat molestiae
          optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum
          voluptates et aut adipisci ea maiores voluptas maxime
        </p>
      </div>
    </div>
  );
}

export default PostCard;