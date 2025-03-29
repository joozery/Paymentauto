import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaClipboardList,
  FaWallet,
  FaLink,
  FaMoneyCheckAlt,
  FaUserFriends,
  FaCog,
  FaChevronDown,
  FaChevronUp,
  FaBook,
} from "react-icons/fa";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState("");
  const location = useLocation();

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  const isActive = (path) => location.pathname === path;

  const menuItemClass = (path) =>
    `px-4 py-2 flex items-center gap-3 rounded-xl transition-all duration-200 ${
      isActive(path)
        ? "bg-blue-600 text-white shadow-md"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  const subMenuItemClass = (path) =>
    `block px-3 py-1.5 rounded-lg text-sm ${
      isActive(path)
        ? "bg-blue-100 text-blue-700 font-medium"
        : "hover:text-blue-600"
    }`;

  return (
    <div className="w-64 h-screen bg-white shadow-xl flex flex-col justify-between border-r border-gray-100">
      {/* Logo */}
      <div>
        <div className="px-6 pt-6 pb-4 text-2xl font-extrabold text-blue-700 tracking-tight">
          AUTO<span className="text-sky-500">PAYZ</span> <span className="text-base">↗</span>
        </div>
        <p className="text-[11px] text-gray-400 px-6 mb-3 tracking-widest uppercase">Pages</p>

        <ul className="space-y-1 px-3 pb-4">
          <li>
            <Link to="/dashboard" className={menuItemClass("/dashboard")}>
              <FaHome /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/statistics" className={menuItemClass("/statistics")}>
              <FaChartBar /> Statistics
            </Link>
          </li>

          {/* Order List */}
          <li>
            <div onClick={() => toggleMenu("order")} className="flex items-center justify-between px-4 py-2 rounded-xl cursor-pointer text-gray-600 hover:bg-gray-100">
              <div className="flex items-center gap-3">
                <FaClipboardList /> Order List
              </div>
              {openMenu === "order" ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openMenu === "order" && (
              <ul className="pl-12 mt-1 space-y-1">
                <li><Link to="/orders/pending" className={subMenuItemClass("/orders/pending")}>Pending Orders</Link></li>
                <li><Link to="/orders/completed" className={subMenuItemClass("/orders/completed")}>Completed</Link></li>
              </ul>
            )}
          </li>

          {/* Finance */}
          <li>
            <div onClick={() => toggleMenu("finance")} className="flex items-center justify-between px-4 py-2 rounded-xl cursor-pointer text-gray-600 hover:bg-gray-100">
              <div className="flex items-center gap-3">
                <FaWallet /> Finance
              </div>
              {openMenu === "finance" ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openMenu === "finance" && (
              <ul className="pl-12 mt-1 space-y-1">
                <li><Link to="/finance/wallet" className={subMenuItemClass("/finance/wallet")}>Wallet</Link></li>
                <li><Link to="/finance/reports" className={subMenuItemClass("/finance/reports")}>Reports</Link></li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/payment-link" className={menuItemClass("/payment-link")}>
              <FaLink /> Payment Link
            </Link>
          </li>

          <li>
            <Link to="/payment" className={menuItemClass("/payment")}>
              <FaMoneyCheckAlt /> Payment
            </Link>
          </li>

          <li>
            <Link to="/settlement" className={menuItemClass("/settlement")}>
              <FaWallet /> Settlement
            </Link>
          </li>

          {/* Members */}
          <li>
            <div onClick={() => toggleMenu("members")} className="flex items-center justify-between px-4 py-2 rounded-xl cursor-pointer text-gray-600 hover:bg-gray-100">
              <div className="flex items-center gap-3">
                <FaUserFriends /> Members
              </div>
              {openMenu === "members" ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openMenu === "members" && (
              <ul className="pl-12 mt-1 space-y-1">
                <li><Link to="/members/all" className={subMenuItemClass("/members/all")}>All Members</Link></li>
                <li><Link to="/members/add" className={subMenuItemClass("/members/add")}>Add New</Link></li>
              </ul>
            )}
          </li>

          {/* Settings */}
          <li>
            <div onClick={() => toggleMenu("settings")} className="flex items-center justify-between px-4 py-2 rounded-xl cursor-pointer text-gray-600 hover:bg-gray-100">
              <div className="flex items-center gap-3">
                <FaCog /> Settings
              </div>
              {openMenu === "settings" ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openMenu === "settings" && (
              <ul className="pl-12 mt-1 space-y-1">
                <li><Link to="/settings/configuration" className={subMenuItemClass("/settings/configuration")}>Configuration</Link></li>
                <li><Link to="/settings/payment-link-display" className={subMenuItemClass("/settings/payment-link-display")}>Payment Link Display</Link></li>
                <li><Link to="/settings/auto-report" className={subMenuItemClass("/settings/auto-report")}>Auto Report</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        <p className="text-xs text-gray-400 mb-2">Support</p>
        <div className="flex gap-2 mb-3 text-lg">🇹🇭 🇮🇳 🇧🇷</div>
        <button className="w-full text-white bg-blue-600 hover:bg-blue-700 rounded-xl px-4 py-2 text-sm flex items-center justify-center gap-2 shadow">
          <FaBook /> API Document
        </button>
      </div>
    </div>
  );
};

export default Sidebar;