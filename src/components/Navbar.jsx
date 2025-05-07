import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Link, Navigate } from "react-router-dom";
import Trade from "./Trade";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import User_profile from "./User_profile";
import User_Dashboard from "./User_Dashboard";
import Stockdetails from './Stockdetails';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Trade", path: "/Trade" },
    { name: "Dashboard", path: "/Dashboard" },
  ];

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      const parsedUser = storedUser ? JSON.parse(storedUser) : null;
      if (parsedUser) {
        setUser(parsedUser);
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem("user"); // cleanup corrupt data
    }
  }, []);

  return (
    <Router>
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 text-xl font-bold text-gray-800">
              Domain.com
            </div>

            <ul className="hidden sm:flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm font-medium px-1 pt-1 border-b-2 ${
                        isActive
                          ? "border-blue-500 text-blue-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex space-x-2">
              {!user ? (
                <>
                  <Link to={"/Login"}>
                    <button className="px-4 py-1 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition text-sm">
                      Login
                    </button>
                  </Link>
                  <Link to={"/signup"}>
                    <button className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm">
                      Signup
                    </button>
                  </Link>
                </>
              ) : (
                <User_profile />
              )}
            </div>

            <div className="hidden sm:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-3 pr-10 py-2 border border-gray-300 rounded-md bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">🔍</span>
                </div>
              </div>
            </div>

            <div className="sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="w-6 h-6 flex flex-col justify-between">
                  <span className="block w-full h-0.5 bg-current"></span>
                  <span className="block w-full h-0.5 bg-current"></span>
                  <span className="block w-full h-0.5 bg-current"></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden border-t border-gray-200 px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Trade" element={<Trade />} />

        
        <Route
          path="/Dashboard"
          element={user ? <Navigate to="/User_Dashboard" replace /> : <Dashboard />}
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/User_Dashboard" element={<User_Dashboard />} />
        <Route path="/stocks/:Symbol" element={<Stockdetails />} />
        </Routes>
    </Router>
  );
}
