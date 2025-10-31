import React from 'react';
import StarsCard from '../ui/Starscard';
import { FiBook } from 'react-icons/fi';
import { TbUserShare } from 'react-icons/tb';
import { AiOutlineDollarCircle, AiOutlineProduct } from 'react-icons/ai';
import IncomeOverviewChart from '../ui/IncomeOverviewChart';
import UserGrowthChart from '../ui/UserGrowthChart';
import HelpCenter from '../ui/HelpCenter';

const Dashboard = () => {
  return (
    <div className="flex flex-col p-4 md:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* ===== Stats Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StarsCard title="Total Users" value="852,650" icon={<TbUserShare />} />
        <StarsCard title="Order Completed" value="4,782" icon={<FiBook />} />
        <StarsCard title="Total Income" value="$25,000" icon={<AiOutlineDollarCircle />} />
        <StarsCard title="Total Products" value="358" icon={<AiOutlineProduct />} />
      </div>

      {/* ===== Charts Section ===== */}
      <div className="flex flex-col lg:flex-row items-stretch gap-6 w-full">
        {/* Chart Container 1 */}
        <div className="flex-1 w-full h-[220px] sm:h-[250px] lg:h-[300px]  rounded-xl  p-3">
          <IncomeOverviewChart />
        </div>

        {/* Chart Container 2 */}
        <div className="flex-1 w-full h-[220px] sm:h-[250px] lg:h-[350px]  rounded-xl  p-3">
          <UserGrowthChart />
        </div>
      </div>


      <div>
        <HelpCenter/>
      </div>
    </div>
  );
};

export default Dashboard;
