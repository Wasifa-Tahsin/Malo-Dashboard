import React, { useState } from "react";
import { FaImage } from "react-icons/fa6";

const AddVoucher = () => {
  const [formData, setFormData] = useState({
    voucherName: "",
    companyName: "",
    cityName: "",
    offer: "",
    postValidity: "",
    quantity: "",
    description: "",
    termsConditions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-base sm:text-lg font-semibold cursor-pointer text-blue-900 flex items-center gap-1">
          ← Add Voucher
        </h1>
        <button className="bg-green-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded hover:bg-green-700">
          + Add Voucher
        </button>
      </div>

      {/* Title */}
      <h2 className="text-center text-xl sm:text-2xl font-semibold text-blue-600 mb-8">
        Upload Voucher
      </h2>

      {/* Upload Box */}
      <div className="border-2 border-dashed border-gray-300 rounded-md h-40 sm:h-48 flex justify-center items-center cursor-pointer mb-8 hover:border-blue-400">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <FaImage className="text-2xl sm:text-3xl text-blue-600" />
          <span className="text-xs sm:text-sm">Upload Image</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Voucher Name */}
        <div>
          <label className="block text-left text-sm sm:text-base font-semibold mb-1 text-gray-700">
            Voucher Name
          </label>
          <input
            type="text"
            name="voucherName"
            value={formData.voucherName}
            onChange={handleChange}
            placeholder="Enter voucher Name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-left text-sm sm:text-base font-semibold mb-1 text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter Company Name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* City Name Select */}
        <div>
          <label className="block text-left text-sm sm:text-base font-semibold mb-1 text-gray-700">
            City Name
          </label>
          <select
            name="cityName"
            value={formData.cityName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select City --</option>
            <option value="dhaka">Dhaka</option>
            <option value="chattogram">Chattogram</option>
            <option value="khulna">Khulna</option>
            <option value="rajshahi">Rajshahi</option>
            <option value="barishal">Barishal</option>
            <option value="sylhet">Sylhet</option>
            <option value="rangpur">Rangpur</option>
          </select>
        </div>

        {/* Offer */}
        <div>
          <label className="block text-left text-sm sm:text-base font-semibold mb-1 text-gray-700">
            Offer
          </label>
          <input
            type="text"
            name="offer"
            value={formData.offer}
            onChange={handleChange}
            placeholder="Enter offer from 1 to 100"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Post Validity Select */}
        <div>
          <label className="block text-left text-sm sm:text-base font-semibold mb-1 text-gray-700">
            Post Validity (days)
          </label>
          <select
            name="postValidity"
            value={formData.postValidity}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value=""> Select Validity </option>
            <option value="7">7 days</option>
            <option value="15">15 days</option>
            <option value="30">30 days</option>
            <option value="60">60 days</option>
          </select>
        </div>

        {/* Quantity Select */}
        <div>
          <label className="block text-left text-sm sm:text-base font-semibold mb-1 text-gray-700">
            Quantity
          </label>
          <select
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value=""> Select Quantity </option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-left text-sm sm:text-base font-semibold mb-1 text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter voucher description"
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
        </div>

        {/* Terms & Conditions */}
        <div>
          <label className="block text-left text-sm sm:text-base font-semibold mb-1 text-gray-700">
            Terms & Conditions
          </label>
          <textarea
            name="termsConditions"
            value={formData.termsConditions}
            onChange={handleChange}
            placeholder="Enter voucher terms & conditions"
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
        </div>

        {/* Apply Button */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="w-48 h-12 bg-gradient-to-r from-blue-700 to-blue-400 text-white font-semibold rounded hover:opacity-90"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVoucher;
