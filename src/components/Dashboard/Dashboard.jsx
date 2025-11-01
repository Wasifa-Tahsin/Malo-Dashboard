import React from 'react';
import StarsCard from '../ui/StarsCard';
import { FiBook } from 'react-icons/fi';
import { TbUserShare } from 'react-icons/tb';
import { AiOutlineDollarCircle, AiOutlineProduct } from 'react-icons/ai';
import IncomeOverviewChart from '../ui/IncomeOverviewChart';
import UserGrowthChart from '../ui/UserGrowthChart';
import HelpCenter from '../ui/HelpCenter';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-[#FCF7E6] min-h-screen flex flex-col gap-6">

      {/* ===== Stats Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StarsCard title="Total Users" value="852,650" icon={<TbUserShare />} />
        <StarsCard title="Order Completed" value="4,782" icon={<FiBook />} />
        <StarsCard title="Total Income" value="$25,000" icon={<AiOutlineDollarCircle />} />
        <StarsCard title="Total Products" value="358" icon={<AiOutlineProduct />} />
      </div>

      {/* ===== Charts Section ===== */}
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        {/* Income Chart */}
        <div className="flex-1 w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl p-2 ">
          <IncomeOverviewChart />
        </div>

        {/* User Growth Chart */}
        <div className="flex-1 w-full h-64 sm:h-72 md:h-80 lg:h-102 rounded-xl p-2 ">
          <UserGrowthChart />
        </div>
      </div>

      {/* ===== Help Center ===== */}
      <div className="w-full">
        <HelpCenter />
      </div>
    </div>
  );
};

export default Dashboard;
