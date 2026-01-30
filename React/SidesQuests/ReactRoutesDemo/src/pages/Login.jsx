import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setIsRedirecting(true);

      setTimeout(() => {
        navigate("/dashboard");
        setIsRedirecting(false);
      }, 2000);
    } else {
      alert("Please enter username and password");
      // navigate("/dashboard");
    }
  };

  return (
    <section className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 border border-gray-700 rounded-xl p-6 space-y-4"
      >
        <div>
          <label className="block text-gray-300 mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 
                       rounded-lg px-3 py-2 text-gray-100
                       focus:outline-none focus:border-blue-500"
            placeholder="Enter username"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 
                       rounded-lg px-3 py-2 text-gray-100
                       focus:outline-none focus:border-blue-500"
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          disabled={isRedirecting}
          className={`w-full py-2 rounded-lg font-medium transition ${
            isRedirecting
              ? "bg-green-900 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          } text-white`}
        >
          {isRedirecting ? "Redirecting..." : "Login and go to Dashboard"}
        </button>
      </form>
    </section>
  );
};

export default Login;
