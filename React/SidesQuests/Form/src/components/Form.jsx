import React from "react";
import { useState } from "react";

function Form({ setUserdata }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserdata({ firstName, lastName, gender, email, imageUrl });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-5 "
      >
        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name :{" "}
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter first name"
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name :{" "}
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter last name"
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender :{" "}
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                className="text-blue-600"
                onChange={(e) => setGender("Male")}
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                className="text-blue-600"
                onChange={(e) => setGender("Female")}
              />
              Female
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                className="text-blue-600"
                onChange={(e) => setGender("Other")}
              />
              Other
            </label>
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email :{" "}
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Image URL */}
        <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL :{" "}
          </label>
          <input
            type="text"
            id="imageUrl"
            placeholder="Enter image URL"
            onChange={(e) => setImageUrl(e.target.value)}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 py-2 text-black font-semibold hover:bg-blue-700 transition bg"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
