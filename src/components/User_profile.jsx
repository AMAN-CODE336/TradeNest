import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "./Firebase";

const User_profile = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem("user"));
    console.log("storeduser : ", storeduser);
    setUser(storeduser);
  }, []);

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("user");
    window.location.href = "/";
    setUser(null);
  };

  if (!user) return null;

  return (
    <>
      <div className="relative">
        {user.photoURL ? (
          // If user has photoURL (google user), show the image
          <img
            src={user.photoURL}
            alt={user.name || "User"}
            className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
        ) : (
          // If no photoURL (custom login), show first letter of name
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center cursor-pointer border-2 border-gray-300 text-xl font-bold"
          >
            {user && user.name ? user.name[0].toUpperCase() : "U"}
          </div>
        )}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-auto bg-white border rounded-md shadow-lg z-10">
            <div className="px-4 py-2 text-sm text-gray-700 border-b">
              {user.name}
            </div>
            <div className="px-2 py-2 text-sm text-gray-700">{user.email}</div>
            <button
              className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
              onClick={() => navigate("/profile")}
            >
              View Profile
            </button>
            <button
              className="w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default User_profile;
