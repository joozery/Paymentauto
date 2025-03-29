import { useState } from "react";

const FinanceWallet = () => {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left Side - Wallet Info */}
      <div className="flex-1 bg-white p-6 rounded-xl border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">💰 Balance</h1>

        {/* Tabs */}
        <div className="flex border-b mb-4">
          <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium">Payin</button>
          <button className="px-4 py-2 text-gray-500 hover:text-blue-600">Payout</button>
        </div>

        {/* Description */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-600 mb-4">
          <p className="mb-2">
            "Pay in balance" typically refers to the process of making a payment using funds that are available within
            an account or balance maintained with a particular platform or service.
          </p>
          <p>
            When you "pay in balance," it means you are using the existing funds or credit stored in your account to
            complete a transaction or make a payment, rather than using an external source such as a credit card or
            bank account.
          </p>
        </div>

        {/* Account Card - Indonesia */}
        <div
          onClick={() => setShowSummary(true)}
          className="cursor-pointer border border-blue-200 p-4 rounded-lg flex justify-between items-center bg-white mb-4 hover:bg-blue-50 transition"
        >
          <div className="flex items-center gap-3">
            <img src="https://flagcdn.com/w40/id.png" className="w-5 h-5" alt="flag" />
            <div>
              <p className="font-semibold text-gray-800">T_INDONESIA_ACCOUNT</p>
              <p className="text-xs text-gray-500">IDR</p>
            </div>
          </div>
          <div className="text-sm text-right">
            <p>Available: 0</p>
            <p>Freeze: 0</p>
            <p>To be settled: 0</p>
          </div>
        </div>

        {/* Account Card - Brazil */}
        <div className="cursor-pointer border border-gray-200 p-4 rounded-lg flex justify-between items-center bg-white hover:bg-blue-50 transition">
          <div className="flex items-center gap-3">
            <img src="https://flagcdn.com/w40/br.png" className="w-5 h-5" alt="flag" />
            <div>
              <p className="font-semibold text-gray-800">T_BRAZIL_ACCOUNT</p>
              <p className="text-xs text-gray-500">BRL</p>
            </div>
          </div>
          <div className="text-sm text-right">
            <p>Available: 0</p>
            <p>Freeze: 0</p>
            <p>To be settled: 0</p>
          </div>
        </div>
      </div>

      {/* Right Side - Summary Panel */}
      <div className="w-full lg:w-[380px] bg-white p-6 rounded-xl border border-gray-200">
        <h2 className="text-lg font-bold mb-4">Virtual Card Summary</h2>

        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 rounded-xl mb-4">
          <p className="text-sm">1102 **** **** 1448</p>
          <p className="text-sm font-medium mt-1">T_INDONESIA_ACCOUNT</p>
        </div>

        <div className="text-sm text-gray-700 mb-4">
          <p>Account No: 110200......281448</p>
          <p>Account Name: T_INDONESIA_ACCOUNT</p>
          <p className="text-green-600 mt-1 font-medium">🟢 Active</p>
        </div>

        <div className="flex gap-2 mb-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold">
            Transactions
          </button>
          <button className="border border-red-400 text-red-500 hover:bg-red-100 px-4 py-2 rounded-md text-sm font-semibold">
            Transfer
          </button>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold mb-4">
          Withdraw
        </button>

        <div className="text-sm text-gray-700 space-y-1">
          <p>Available: 0</p>
          <p>Freeze: 0</p>
          <p>To be settled: 0</p>
        </div>
      </div>
    </div>
  );
};

export default FinanceWallet;