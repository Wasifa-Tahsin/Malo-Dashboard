import React, { useState } from "react";
import { FaImage } from "react-icons/fa6";

const PostEvent = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    description: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    location: "",
    postValidity: "",
    url: "",
    eventFees: "250",
    postingType: "free",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePostingType = (type) => {
    setFormData((prev) => ({
      ...prev,
      postingType: type,
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
          ← Add Event
        </h1>
        <button className="bg-green-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded hover:bg-green-700">
          + Add Event
        </button>
      </div>

      {/* Title */}
      <h2 className="text-center text-xl sm:text-2xl font-semibold text-blue-600 mb-8">
        Post Event
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
        {/* Event Name */}
        <div>
          <label className="block text-left text-sm sm:text-base font-semibold mb-1 text-gray-700">
            Home
          </label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            placeholder="Enter event Name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
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
            placeholder="Enter event Description"
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
        </div>

        {/* Date of Event */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center text-left">
          <div className="sm:col-span-2">
            <label className="block text-sm sm:text-base font-semibold mb-1 text-gray-700">
              Date of Event
            </label>
            <input
              type="number"
              name="startDate"
             
              placeholder="Start date"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="text-center text-gray-700 font-semibold text-sm sm:text-base">
            To
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm sm:text-base font-semibold mb-1 text-gray-700 invisible">
              End date label
            </label>
            <input
              type="number"
              name="endDate"
              
              placeholder="End date"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Time of Event */}
        <div className="text-left grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
          <div className="sm:col-span-2">
            <label className="block text-sm sm:text-base font-semibold mb-1 text-gray-700">
              Time of Event
            </label>
            <input
              type="number"
              name="startTime"
              
              placeholder="Start time"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="text-center text-gray-700 font-semibold text-sm sm:text-base">
            To
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm sm:text-base font-semibold mb-1 text-gray-700 invisible">
              End time label
            </label>
            <input
              type="number"
              name="endTime"
             
              placeholder="End time"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="text-left block text-sm sm:text-base font-semibold mb-1 text-gray-700">
            Location
          </label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
          >
            <option value="">Select Location</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
          </select>
        </div>

        {/* Post Validity */}
        <div>
          <label className="text-left block text-sm sm:text-base font-semibold mb-1 text-gray-700">
            Post validity
          </label>
          <select
            name="postValidity"
            value={formData.postValidity}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
          >
            <option value="">Select Post Visible Day</option>
            <option value="7">7 Days</option>
            <option value="15">15 Days</option>
            <option value="30">30 Days</option>
          </select>
        </div>

        {/* URL */}
        <div>
          <label className="text-left block text-sm sm:text-base font-semibold mb-1 text-gray-700">
            URL
          </label>
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="http://"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Event Fees */}
        <div>
          <label className="text-left block text-sm sm:text-base font-semibold mb-1 text-gray-700">
            Event Fees
          </label>
          <input
            type="number"
            name="eventFees"
            value={formData.eventFees}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Posting Type */}
        <h2 className="text-left text-sm sm:text-base font-semibold mb-2">Posting Type</h2>
        <div className="flex gap-4 sm:gap-6 flex-wrap">
          <button
            type="button"
            onClick={() => handlePostingType("free")}
            className={`flex-1 py-3 rounded-md border text-sm sm:text-base min-w-[120px] ${
              formData.postingType === "free"
                ? "border-blue-600 bg-blue-50 text-blue-700"
                : "border-gray-300 text-gray-600"
            }`}
          >
            Free Post
          </button>
          <button
            type="button"
            onClick={() => handlePostingType("paid")}
            className={`flex-1 py-3 rounded-md border text-sm sm:text-base min-w-[120px] ${
              formData.postingType === "paid"
                ? "border-green-600 bg-green-50 text-green-700"
                : "border-gray-300 text-gray-600"
            }`}
          >
            Paid Post 250W 750
          </button>
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

export default PostEvent;
