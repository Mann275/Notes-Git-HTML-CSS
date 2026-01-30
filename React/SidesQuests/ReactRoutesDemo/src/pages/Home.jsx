import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <section>
      <h1 className="text-3xl font-bold mb-3">Home</h1>
      <p className="text-gray-400 max-w-xl ">React Router demo app</p>

      <button
        onClick={() => navigate("/products")}
        className="bg-blue-600 hover:bg-blue-700 transition
                   text-white px-5 py-2 rounded-lg"
      >
        Go to Products
      </button>
    </section>
  );
};

export default Home;
