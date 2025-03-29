import React from "react";

const VirtualCardSummary = ({ onClose }) => {
  return (
    <div className="w-full sm:w-[360px] bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between">
      <h2 className="text-lg font-bold mb-4">Virtual Card Summary</h2>

      {/* Card Display */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 rounded-xl mb-4">
        <p className="text-sm">1102 **** **** 1448</p>
        <p className="text-sm font-medium mt-1">T_INDONESIA_ACCOUNT</p>
      </div>

      {/* Account Detail */}
      <div className="text-sm text-gray-700 mb-4 space-y-1">
        <p>Account No: 110200......281448</p>
        <p>Account Name: T_INDONESIA_ACCOUNT</p>
        <p className="text-green-600 font-medium">🟢 Active</p>
      </div>

      {/* Action Buttons */}
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

      {/* Amount Detail */}
      <div className="text-sm text-gray-700 space-y-1">
        <p>Available: 0</p>
        <p>Freeze: 0</p>
        <p>To be settled: 0</p>
      </div>

      {/* Optional Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="mt-6 text-center text-sm text-gray-500 hover:text-red-500"
        >
          ❌ Close
        </button>
      )}
    </div>
  );
};

export default VirtualCardSummary;