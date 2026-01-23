import React from "react";

function Card({
  firstName = "Enter First Name",
  lastName = "Enter Last Name",
  gender = "Enter Gender",
  email = "Enter Email",
  imageUrl = "https://images.unsplash.com/photo-1768797767742-353a378404b8?q=80&w=687&auto=format&fit=crop",
}) {
  return (
    <div className="max-w-md mx-auto mt-10 rounded-xl bg-white/90 backdrop-blur border-2 border-yellow-400 shadow-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-3">
        User Details
      </h2>

      <div className="flex gap-4 text-sm text-gray-700 border-b border-gray-200 pb-3">
        {/* LEFT: Image */}
        <img
          className="w-28 h-28 object-cover shadow-xl rounded-md"
          alt=""
          src={`${imageUrl}`}
        />

        {/* RIGHT: Text */}
        <div className="flex-1 space-y-3">
          <div className="flex justify-between">
            <span className="font-medium text-gray-500">First Name :</span>
            <span>{firstName}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-500">Last Name :</span>
            <span>{lastName}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-500">Gender :</span>
            <span>{gender}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-500">Email :</span>
            <span className="text-blue-600">{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
