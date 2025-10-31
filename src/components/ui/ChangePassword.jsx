import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import image from "../../assets/images/maloUserLogo.png";
import { Link, useNavigate } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";

const ChangePassword = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password change submitted");
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 py-6">
      {/* Back Button & Title */}
      <div className="w-full max-w-[710px] flex items-center gap-2 mb-6  cursor-pointer">
        <FaArrowLeftLong
          className="text-2xl text-[#0555bf] hover:text-[#5bd2f4] transition"
          onClick={() => navigate(-1)}
        />
        <h2 className="text-xl text-left font-semibold">Profile</h2>
      </div>

      {/* Profile Header */}
      <div className="flex flex-col items-center space-y-4 mb-8">
        <img
          className="h-[118px] w-[118px] rounded-full object-cover"
          src={image}
          alt="Profile"
        />
        <h2 className="text-3xl font-semibold text-black">Mr. Admin</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 text-lg font-medium mb-6">
        <Link to="/profile">
          <button className="text-gray-500 hover:text-[#4a95db] pb-1">
            Edit Profile
          </button>
        </Link>
        <Link to="/changePassword">
          <button className="text-[#0555bf] border-b-2 border-[#5bd2f4] pb-1">
            Change Password
          </button>
        </Link>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-center mb-6">
        Change Password
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="rounded-lg flex flex-col space-y-4 mx-auto w-full max-w-[710px]"
      >
        {/* Current Password */}
        <div className="flex flex-col items-start w-full">
          <label
            htmlFor="currentPassword"
            className="text-gray-700 font-medium mb-1"
          >
            Current Password
          </label>
          <div className="relative w-full">
            <input
              type={showCurrent ? "text" : "password"}
              id="currentPassword"
              name="currentPassword"
              className="w-full h-[60px] border border-gray-300 rounded-md px-3 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-[#47a2df]"
            />
            <div
              onClick={() => setShowCurrent(!showCurrent)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            >
              {showCurrent ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>

        {/* New Password */}
        <div className="flex flex-col items-start w-full">
          <label
            htmlFor="newPassword"
            className="text-gray-700 font-medium mb-1"
          >
            New Password
          </label>
          <div className="relative w-full">
            <input
              type={showNew ? "text" : "password"}
              id="newPassword"
              name="newPassword"
              className="w-full h-[60px] border border-gray-300 rounded-md px-3 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-[#47a2df]"
            />
            <div
              onClick={() => setShowNew(!showNew)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            >
              {showNew ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col items-start w-full">
          <label
            htmlFor="confirmPassword"
            className="text-gray-700 font-medium mb-1"
          >
            Confirm New Password
          </label>
          <div className="relative w-full">
            <input
              type={showConfirm ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full h-[60px] border border-gray-300 rounded-md px-3 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-[#47a2df]"
            />
            <div
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            >
              {showConfirm ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full h-[60px] text-white font-semibold rounded-md shadow-md transition-transform hover:scale-[1.02]"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,85,191,1) 0%, rgba(91,210,244,1) 100%)",
          }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
