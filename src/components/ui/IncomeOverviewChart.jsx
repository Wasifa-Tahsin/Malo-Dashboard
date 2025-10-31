import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const IncomeOverviewChart = () => {
  // Example data
  const data2024 = [
    { month: 'Jan', income: 4000 },
    { month: 'Feb', income: 3000 },
    { month: 'Mar', income: 4500 },
    { month: 'Apr', income: 3500 },
    { month: 'May', income: 5000 },
    { month: 'Jun', income: 4800 },
  ];

  const data2025 = [
    { month: 'Jan', income: 4200 },
    { month: 'Feb', income: 3700 },
    { month: 'Mar', income: 5200 },
    { month: 'Apr', income: 4600 },
    { month: 'May', income: 5600 },
    { month: 'Jun', income: 6000 },
  ];

  const [year, setYear] = useState('2025');

  const chartData = year === '2024' ? data2024 : data2025;

  return (
    <div className="p-5 rounded-xl bg-white text-gray-800 shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg md:text-xl font-bold text-[#0555BF]">
          Income Overview
        </h2>

        {/* Year Select */}
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="bg-[#0555BF] text-white rounded-md px-3 py-1 text-sm focus:outline-none cursor-pointer hover:bg-[#0A6BE8] transition"
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
        </select>
      </div>

      {/* Chart */}
      <div className="w-full h-[220px] sm:h-[250px] lg:h-[250px]">
        <ResponsiveContainer>
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              {/* Blue gradient for area */}
              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="rgba(5, 85, 191, 1)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="rgba(91, 210, 244, 1)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
            <XAxis dataKey="month" stroke="#555" />
            <YAxis stroke="#555" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                color: '#000',
                borderRadius: '8px',
                border: '1px solid #ccc',
              }}
            />
            <Area
              type="monotone"
              dataKey="income"
              stroke="#0555BF"
              fillOpacity={1}
              fill="url(#colorIncome)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomeOverviewChart;
