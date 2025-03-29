import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

// ✅ นำเข้าหน้าทั้งหมด
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import OrderPending from "../pages/OrderPending";
import OrderCompleted from "../pages/OrderCompleted";
import FinanceWallet from "../pages/FinanceWallet";
import FinanceReports from "../pages/FinanceReports";
import PaymentLink from "../pages/PaymentLink";
import Payment from "../pages/Payment";
import Settlement from "../pages/Settlement";
import MembersAll from "../pages/MembersAll";
import MembersAdd from "../pages/MembersAdd";
import SettingsProfile from "../pages/SettingsProfile";
import SettingsSecurity from "../pages/SettingsSecurity";

const MainContent = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="dashboard flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-6 overflow-auto font-['Prompt']">

        {/* ✅ Routing แบบตรง path */}
        {currentPath === "/dashboard" && <Dashboard />}
        {currentPath === "/statistics" && <Statistics />}
        {currentPath === "/orders/pending" && <OrderPending />}
        {currentPath === "/orders/completed" && <OrderCompleted />}
        {currentPath === "/finance/wallet" && <FinanceWallet />}
        {currentPath === "/finance/reports" && <FinanceReports />}
        {currentPath === "/payment-link" && <PaymentLink />}
        {currentPath === "/payment" && <Payment />}
        {currentPath === "/settlement" && <Settlement />}
        {currentPath === "/members/all" && <MembersAll />}
        {currentPath === "/members/add" && <MembersAdd />}
        {currentPath === "/settings/profile" && <SettingsProfile />}
        {currentPath === "/settings/security" && <SettingsSecurity />}

        {/* ✅ Default fallback ถ้า path ไม่ตรง */}
        {![
          "/dashboard",
          "/statistics",
          "/orders/pending",
          "/orders/completed",
          "/finance/wallet",
          "/finance/reports",
          "/payment-link",
          "/payment",
          "/settlement",
          "/members/all",
          "/members/add",
          "/settings/profile",
          "/settings/security"
        ].includes(currentPath) && (
          <h1 className="text-2xl font-bold text-red-500">Page Not Found</h1>
        )}
      </div>
    </div>
  );
};

export default MainContent;