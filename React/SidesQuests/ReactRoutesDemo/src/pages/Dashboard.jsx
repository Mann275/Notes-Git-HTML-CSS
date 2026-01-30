import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
      <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
      <p className="text-gray-400">This is a protected dashboard page.</p>
      <button
        onClick={() => navigate("/Login")}
        className="bg-blue-600 hover:bg-blue-700 transition
                   text-white px-5 py-2 rounded-lg"
      >
        Login
      </button>
    </div>
  );
}

export default Dashboard;
