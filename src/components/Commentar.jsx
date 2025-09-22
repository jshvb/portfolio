import React from "react";

const mockComments = [
  { id: 1, user: "Alice", message: "Great portfolio!" },
  { id: 2, user: "Bob", message: "Loved your projects!" },
  { id: 3, user: "Charlie", message: "Keep up the good work!" },
];

const Commentar = () => {
  return (
    <div className="comments-section max-w-3xl mx-auto p-6">
      <h2 className="section-title text-2xl font-bold text-indigo-500 mb-6 text-center">
        Comments
      </h2>
      <div className="space-y-4">
        {mockComments.map((comment) => (
          <div
            key={comment.id}
            className="comment-card p-4 rounded-lg shadow-md bg-gradient-to-r from-indigo-50 to-purple-50 hover:scale-105 transform transition duration-300"
          >
            <p className="font-semibold text-indigo-700">{comment.user}</p>
            <p className="text-gray-700 mt-1">{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commentar;
