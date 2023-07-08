import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col mb-4 lg:mb-0">
            <div className="flex items-center mb-2">
              <img src={logo} alt="Company Logo" className="h-8 w-8 mr-2" />
              <h3 className="text-xl font-semibold">Shop Fusion</h3>
            </div>
            <p className="text-sm">Shop Fusion is one of you best friends who provides you best products.</p>
          </div>
          <div className="flex flex-col mb-4 lg:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link >Products</Link>
              </li>
              <li>
                <Link >Dashboard</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">Address: 123 Main St, City, Country</p>
            <p className="text-sm">Phone: +1 123-456-7890</p>
            <p className="text-sm">Email: info@shopfusion.com</p>
          </div>
        </div>
        <div className="flex lg:justify-center mt-6">
          <ul className="flex space-x-4 text-2xl text-green-700">
            <li>
              <Link>
                <FaFacebook></FaFacebook>
              </Link>
            </li>
            <li>
              <Link>
                <FaTwitter></FaTwitter>
              </Link>
            </li>
            <li>
              <Link>
                <FaInstagram></FaInstagram>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700" />
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Shop Fusion. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
