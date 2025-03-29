import React from "react";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const summaryCards = [
    { title: "Total Balance", value: "$16,745.00", diff: "+6%", diffColor: "text-green-600" },
    { title: "Total Saving", value: "$5,981.00", diff: "-2.8%", diffColor: "text-red-600" },
    { title: "Revenue", value: "$9,116.00", diff: "+1.3%", diffColor: "text-green-600" },
    { title: "Credit", value: "$4,872.00", diff: "+1.3%", diffColor: "text-green-600" },
  ];

  const lineChartOptions = {
    chart: { id: "cash-flow" },
    xaxis: {
      categories: ["May", "June", "July", "August", "September", "October", "November"],
    },
    stroke: { curve: "smooth" },
  };

  const lineChartSeries = [
    { name: "Income", data: [400, 500, 600, 700, 600, 650, 700] },
    { name: "Expense", data: [200, 250, 300, 350, 300, 325, 350] },
  ];

  const radialChartOptions = {
    chart: { type: "radialBar" },
    labels: ["Progress"],
  };

  const radialChartSeries = [48];

  const transactions = [
    { id: "SPD-0051", amount: "$137,000", status: "Paid" },
    { id: "SPD-0042", amount: "$432,000", status: "Paid" },
    { id: "SPD-0165", amount: "$200,000", status: "Pending" },
    { id: "SPD-5130", amount: "$365,000", status: "Paid" },
  ];

  return (
    <div className="p-6 space-y-6 font-['Prompt']">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((card, i) => (
          <div key={i} className="bg-white rounded-xl p-4 shadow border border-gray-200">
            <p className="text-gray-500 text-sm">{card.title}</p>
            <h2 className="text-xl font-bold mt-2">{card.value}</h2>
            <p className={`text-xs mt-1 ${card.diffColor}`}>{card.diff} vs last month</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 shadow border border-gray-200 col-span-2">
          <h3 className="font-semibold mb-2">Cash Flow Analytics</h3>
          <Chart options={lineChartOptions} series={lineChartSeries} type="line" height={300} />
        </div>
        <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
          <h3 className="font-semibold mb-2">Financial Balance</h3>
          <Chart options={radialChartOptions} series={radialChartSeries} type="radialBar" height={300} />
        </div>
      </div>

      {/* Recent Transactions & Tax */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
          <h3 className="font-semibold mb-2">Recent Transactions</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Order ID</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-2">{t.id}</td>
                  <td>{t.amount}</td>
                  <td>
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
                        t.status === "Paid"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
          <h3 className="font-semibold mb-2">Tax Liabilities</h3>
          <p className="text-2xl font-bold mb-2">$32,872.00</p>
          <div className="w-full h-4 bg-gray-100 rounded-lg overflow-hidden">
            <div className="h-full bg-blue-500 w-[44%]" />
          </div>
          <p className="text-xs text-gray-500 mt-1">Value Added Tax 44%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;