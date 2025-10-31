import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const UserGrowthChart = () => {
  const [period, setPeriod] = useState('Monthly');

  // Example datasets
  const monthlyData = [
    { month: 'Jan', users: 200 },
    { month: 'Feb', users: 400 },
    { month: 'Mar', users: 700 },
    { month: 'Apr', users: 1000 },
    { month: 'May', users: 1400 },
    { month: 'Jun', users: 1800 },
  ];

  const quarterlyData = [
    { month: 'Q1', users: 1300 },
    { month: 'Q2', users: 3200 },
    { month: 'Q3', users: 4700 },
    { month: 'Q4', users: 5500 },
  ];

  const yearlyData = [
    { month: '2021', users: 12000 },
    { month: '2022', users: 18000 },
    { month: '2023', users: 22000 },
    { month: '2024', users: 26000 },
  ];

  // Select data based on period
  const data =
    period === 'Monthly'
      ? monthlyData
      : period === 'Quarterly'
      ? quarterlyData
      : yearlyData;

  return (
    <div className="p-5 rounded-xl bg-white text-gray-800 shadow-md w-full h-full">
      {/* Header with Select on Right */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg md:text-xl font-bold text-[#0555BF]">
          User Growth
        </h2>

        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="bg-white text-black border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none"
        >
          <option value="Monthly">Monthly</option>
          <option value="Quarterly">Quarterly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>

      {/* Tiny Bar Chart */}
      <div className="w-full h-[220px] sm:h-[250px] lg:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 20, left: -10, bottom: 5 }}
            barSize={25}
          >
            <defs>
              <linearGradient id="barColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgba(5, 85, 191, 1)" stopOpacity={0.9} />
                <stop offset="95%" stopColor="rgba(91, 210, 244, 1)" stopOpacity={0.5} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
            <XAxis dataKey="month" stroke="#555" tick={{ fontSize: 12 }} axisLine={false} />
            <YAxis stroke="#555" tick={{ fontSize: 12 }} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                color: '#000',
                borderRadius: '8px',
                border: '1px solid #ccc',
              }}
              cursor={{ fill: 'rgba(5,85,191,0.1)' }}
            />
            <Bar dataKey="users" fill="url(#barColor)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserGrowthChart;
