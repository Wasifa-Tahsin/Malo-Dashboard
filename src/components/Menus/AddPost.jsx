import React, { useState } from "react";

const AddPost = () => {
  const [postType, setPostType] = useState("");
  const [postPlan, setPostPlan] = useState("");

  return (
    <div className="max-w-4xl text-left mx-auto bg-white shadow-md rounded-lg p-8 my-10 font-poppins">



        <div className="flex justify-between items-center mb-6">
        <button className="text-blue-600 font-semibold flex items-center gap-1 hover:underline">
          ← Add Post
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          + Add Post
        </button>
      </div>



      <h2 className="text-2xl font-semibold text-center text-blue-500 mb-6">
        Post Product
      </h2>

      {/* Upload Button */}
      <div className="flex justify-center mb-6">
        <button className="w-12 h-12 border border-gray-300 rounded-md text-blue-500 text-3xl leading-none hover:bg-blue-50">
          +
        </button>
      </div>

      {/* Posting Type */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Posting Type
        </label>
        <div className="flex flex-wrap gap-3">
          <button
            className={`flex-1 border rounded-md py-2 ${
              postType === "buy"
                ? "border-blue-500 text-blue-500 shadow-md"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setPostType("buy")}
          >
            Buying
          </button>
          <button
            className={`flex-1 border rounded-md py-2 ${
              postType === "sell"
                ? "border-blue-500 text-blue-500 shadow-md"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setPostType("sell")}
          >
            Selling
          </button>
        </div>
      </div>

      {/* Product Name */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Product Name
        </label>
        <input
          type="text"
          placeholder="Enter Product Name"
          className="w-full border border-gray-200 bg-gray-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Description */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          placeholder="Product you are looking for..."
          className="w-full border border-gray-200 bg-gray-50 rounded-md p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Price Range */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range
        </label>
        <div className="flex items-center gap-3">
          <input
            type="number"
            placeholder="From"
            className="w-1/2 border border-gray-200 bg-gray-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span className="text-sm font-semibold text-blue-500">To</span>
          <input
            type="number"
            placeholder="To"
            className="w-1/2 border border-gray-200 bg-gray-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Category */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <select className="w-full border border-gray-200 bg-gray-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option>Select Category</option>
        </select>
      </div>

      {/* Sub Category */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sub Category
        </label>
        <select className="w-full border border-gray-200 bg-gray-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option>Select Sub Category</option>
        </select>
      </div>

      {/* Location */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <select className="w-full border border-gray-200 bg-gray-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option>Select location</option>
        </select>
      </div>

      {/* Post Validity */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Post Validity
        </label>
        <select className="w-full border border-gray-200 bg-gray-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option>Select Post Visible Day</option>
        </select>
      </div>

      {/* Posting Type */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Posting Type
        </label>
        <div className="flex flex-wrap gap-3">
          <button
            className={`flex-1 border rounded-md py-2 ${
              postPlan === "free"
                ? "border-blue-500 text-blue-500 shadow-md"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setPostPlan("free")}
          >
            Free Post
          </button>
          <button
            className={`flex-1 border rounded-md py-2 ${
              postPlan === "paid"
                ? "border-blue-500 text-blue-500 shadow-md"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setPostPlan("paid")}
          >
            Paid Post <br />
            <span className="text-red-500 font-semibold text-sm">ZMW 750</span>
          </button>
          <button
            className={`flex-1 border rounded-md py-2 ${
              postPlan === "premium"
                ? "border-blue-500 text-blue-500 shadow-md"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setPostPlan("premium")}
          >
            Premium Advert
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center mt-8">
        <button className="w-40 py-2 rounded-md text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddPost;
