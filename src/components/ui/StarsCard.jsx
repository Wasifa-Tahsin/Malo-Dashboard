import React from "react";

const StarsCard = ({ title, value, icon }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center text-center 
      hover:shadow-lg transition-all duration-300 w-full"
    >
      {/* Title */}
      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-800">
        {title}
      </h2>

      {/* Icon */}
      <div
        className="text-blue-800 rounded-full p-3 sm:p-4 md:p-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl
        bg-[#5BD2F4] mt-2 sm:mt-3 mb-2 sm:mb-3 flex items-center justify-center"
      >
        {icon}
      </div>

      {/* Value */}
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
        {value}
      </p>
    </div>
  );
};

export default StarsCard;
