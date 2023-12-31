import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { cart } = useCart();
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/myCart">
          <FaShoppingCart></FaShoppingCart>
          <span>{cart?.length}</span>
        </Link>
      </li>
      <li>
        <Link to="/dashboard/adminHome">Dashboard</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-info p-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case">
          <img className="w-10" src={logo} alt="" />
          <span className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase">
            Shop Fusion
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-secondary btn-outline"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-secondary btn-outline">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
