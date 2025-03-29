import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCaretDown, FaSignOutAlt } from "react-icons/fa";
import defaultProfile from "../assets/proflie.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "Guest",
    role: "Guest",
    profilePic: defaultProfile,
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser({
        username: storedUser.username || "User",
        role: storedUser.role || "Member",
        profilePic: storedUser.profilePic || defaultProfile,
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between font-['Prompt'] border-b border-gray-100">
      {/* Left Section */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800 tracking-tight">
          สวัสดี <span className="text-blue-600">{user.username}</span> 👋
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          วันนี้{" "}
          {new Date().toLocaleDateString("th-TH", {
            weekday: "long",
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>

      {/* Right Section */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-3 focus:outline-none transition-all"
        >
          <img
            src={user.profilePic}
            alt="User"
            className="w-10 h-10 rounded-full border shadow-md object-cover"
          />
          <div className="text-left hidden sm:block">
            <p className="text-sm font-medium text-gray-800">{user.username}</p>
            <p className="text-xs text-gray-500">{user.role}</p>
          </div>
          <FaCaretDown className="text-gray-500 mt-1" />
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
            <button
              onClick={handleLogout}
              className="w-full px-4 py-3 text-left text-red-600 hover:bg-gray-50 text-sm flex items-center gap-2 transition-all"
            >
              <FaSignOutAlt className="text-base" />
              ออกจากระบบ
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;