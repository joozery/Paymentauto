import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const configData = {
  merchantId: "20019",
  merchantCode: "20019202402271029",
  merchantName: "20019",
  merchantSecret: "95b57c46b8c2e068928be23fb669a80612cad68e6ce6ba4f5af9ec20d23bb274",
  platformPublicKey:
    "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA... (ตัดบางส่วนเพื่อแสดง UI)",
};

const SettingsConfiguration = () => {
  const [activeTab, setActiveTab] = useState("info");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-4"> Configuration</h1>

      {/* Tabs */}
      <div className="flex border-b mb-4">
        <button
          className={`px-4 py-2 border-b-2 ${
            activeTab === "info"
              ? "border-blue-600 text-blue-600 font-semibold"
              : "border-transparent text-gray-500"
          }`}
          onClick={() => setActiveTab("info")}
        >
          Configuration Info
        </button>
        <button
          className={`px-4 py-2 border-b-2 ${
            activeTab === "setting"
              ? "border-blue-600 text-blue-600 font-semibold"
              : "border-transparent text-gray-500"
          }`}
          onClick={() => setActiveTab("setting")}
        >
          API Setting
        </button>
      </div>

      {/* Info Panel */}
      {activeTab === "info" && (
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-md text-sm text-blue-700 mb-6">
          ℹ️ You need to know your{" "}
          <span className="font-semibold text-blue-800">Merchant ID</span>,{" "}
          <span className="font-semibold text-blue-800">Merchant Code</span>,{" "}
          <span className="font-semibold text-blue-800">Merchant Name</span>,{" "}
          <span className="font-semibold text-blue-800">Merchant Secret</span>{" "}
          and{" "}
          <span className="font-semibold text-blue-800">Platform Public Key</span>{" "}
          to communicate with TheSmilepay. Please use the development server while
          you are still in development process.
        </div>
      )}

      {/* Data Table */}
      <div className="space-y-3">
        {Object.entries(configData).map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between bg-gray-100 p-3 rounded-md"
          >
            <div className="text-gray-600 w-1/3 font-medium capitalize">
              {label.replace(/([A-Z])/g, " $1")}
            </div>
            <div className="w-2/3 flex justify-between items-center">
              <span className="truncate">{value}</span>
              <button
                onClick={() => handleCopy(value)}
                className="text-gray-400 hover:text-blue-600"
              >
                <FaRegCopy />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsConfiguration;