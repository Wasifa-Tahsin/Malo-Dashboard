import React from "react";
import {
  FaLongArrowAltLeft,
  FaHeart,
  FaRegCommentDots,
  FaStar,
  FaEye,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import AdPromotionImg from "../../assets/images/AdPromotion.png";

const AdPromotional = () => {
  return (
    <main className="p-4 md:p-6 lg:p-8">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center gap-3">
        <div className="flex items-center gap-2">
          <FaLongArrowAltLeft className="text-blue-400 text-xl" />
          <h2 className="text-lg md:text-xl font-bold">Ad Promotional</h2>
        </div>

        <div>
          <h2 className="bg-[#00AD5A] py-2 px-3 rounded-xl text-white text-sm md:text-base cursor-pointer hover:bg-[#00924d] transition">
            + Add Promotional
          </h2>
        </div>
      </div>

      {/* Table Headers */}
      <div className="hidden md:flex justify-between items-center mt-5 font-semibold text-gray-700">
        <h2>SL No.</h2>
        <h2>Ads</h2>
        <h2>Action</h2>
      </div>

      {/* Ad Card */}
      <div className="flex flex-col md:flex-row justify-between items-start  gap-6 mt-8 bg-white md:bg-transparent rounded-lg p-3 md:p-0 shadow-sm md:shadow-none">
        {/* Serial Number */}
        <div className="text-gray-800 font-semibold text-center md:text-left">
          <h2>#1233</h2>
        </div>

        {/* Ad Box */}
        <div
          className="flex flex-col text-left rounded-2xl p-3 relative w-full md:w-[280px] lg:w-[320px] mx-auto"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,85,191,1) 0%, rgba(91,210,244,1) 100%)",
          }}
        >
          {/* Image with Like & Message Icons */}
          <div className="relative">
            <img
              className="h-[160px] w-full rounded-2xl object-cover"
              src={AdPromotionImg}
              alt="Ad Promotion"
            />
            <FaHeart className="text-blue-400 text-xl cursor-pointer absolute bottom-3 left-4 hover:text-red-400 transition" />
            <FaRegCommentDots className="text-blue-400 text-xl cursor-pointer absolute bottom-3 right-4 hover:text-blue-300 transition" />
          </div>

          {/* Title + Star Rating + Eye Icon */}
          <div className="flex justify-between items-start mt-3">
            <div>
              <h2 className="font-bold text-white text-sm md:text-base">
                Media and Marketing
              </h2>
              <div className="flex items-center gap-2 text-white text-xs md:text-sm mt-1">
                <div className="flex text-yellow-300">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span>4.8/5</span>
              </div>
            </div>
            <FaEye className="text-gray-300 text-lg mt-1" />
          </div>

          {/* Description */}
          <p className="text-white text-xs md:text-sm mt-2">
            Advertising consultation, branding and promotions.
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 mt-2 text-white text-xs md:text-sm">
            <FaMapMarkerAlt />
            <span>Lusaka</span>
          </div>

          {/* Price */}
          <div className="mt-2 text-right text-white font-semibold text-xs md:text-sm">
            ZMW150–300
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center md:justify-end w-full md:w-auto">
          <MdEdit className="bg-blue-400 text-2xl md:text-3xl p-2 rounded-lg text-white cursor-pointer hover:bg-blue-500 transition" />
          <RiDeleteBin6Line className="bg-red-400 text-2xl md:text-3xl p-2 rounded-lg text-white cursor-pointer hover:bg-red-500 transition" />
        </div>
      </div>
    </main>
  );
};

export default AdPromotional;
