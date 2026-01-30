import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex gap-6">
        <NavLink to="/" className={navStyle}>
          Home
        </NavLink>
        <NavLink to="/about" className={navStyle}>
          About
        </NavLink>
        <NavLink to="/contact" className={navStyle}>
          Contact
        </NavLink>
        <NavLink to="/products" className={navStyle}>
          Products
        </NavLink>
        <NavLink to="/dashboard" className={navStyle}>
          Dashboard
        </NavLink>
      </div>
    </nav>
  );
};

const navStyle = ({ isActive }) =>
  `transition ${
    isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-white"
  }`;

export default Navbar;
