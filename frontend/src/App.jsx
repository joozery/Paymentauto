import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ import route guard

// ✅ Pages
import Dashboard from "./components/pages/Dashboardoverview";
import Statistics from "./components/pages/Statistics";
import OrderPending from "./components/pages/OrderPending";
import OrderCompleted from "./components/pages/OrderCompleted";
import FinanceWallet from "./components/pages/FinanceWallet";
import FinanceReports from "./components/pages/FinanceReports";
import PaymentLink from "./components/pages/PaymentLink";
import Payment from "./components/pages/Payment";
import Settlement from "./components/pages/Settlement";
import MembersAll from "./components/pages/MembersAll";
import MembersAdd from "./components/pages/MembersAdd";
import SettingsProfile from "./components/pages/SettingsProfile";
import SettingsSecurity from "./components/pages/SettingsSecurity";
import SettingsConfiguration from "./components/pages/SettingsConfiguration";
import SettingsPaymentLinkDisplay from "./components/pages/SettingsPaymentLinkDisplay";
import SettingsAutoReport from "./components/pages/SettingsAutoReport";
import Login from "./components/pages/Login"; // ✅ Login Page

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="orders/pending" element={<OrderPending />} />
        <Route path="orders/completed" element={<OrderCompleted />} />
        <Route path="finance/wallet" element={<FinanceWallet />} />
        <Route path="finance/reports" element={<FinanceReports />} />
        <Route path="payment-link" element={<PaymentLink />} />
        <Route path="payment" element={<Payment />} />
        <Route path="settlement" element={<Settlement />} />
        <Route path="members/all" element={<MembersAll />} />
        <Route path="members/add" element={<MembersAdd />} />
        <Route path="settings/profile" element={<SettingsProfile />} />
        <Route path="settings/security" element={<SettingsSecurity />} />
        <Route path="settings/configuration" element={<SettingsConfiguration />} />
        <Route path="settings/payment-link-display" element={<SettingsPaymentLinkDisplay />} />
        <Route path="settings/auto-report" element={<SettingsAutoReport />} />
      </Route>

      <Route path="*" element={<h1 className="p-4 text-red-600 text-xl">404 Not Found</h1>} />
    </Routes>
  );
}

export default App;