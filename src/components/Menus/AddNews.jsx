import React, { useState } from "react";
import { FaImage } from "react-icons/fa6";

const AddNews = () => {
  const [formData, setFormData] = useState({
    mainTitle: "",
    date: "",
    description: "",
    time: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6  ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button className="text-blue-600 font-semibold flex items-center gap-1 hover:underline">
          ← Add News
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          + Add News
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-6">
        {/* Left Side */}
        <div className="col-span-2 flex flex-col gap-4">
          <div>
            <label className="block text-left text-sm font-semibold mb-1 text-gray-700">
              Main Title
            </label>
            <input
              type="text"
              name="mainTitle"
              value={formData.mainTitle}
              onChange={handleChange}
              placeholder="Enter"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-left text-sm font-semibold mb-1 text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter"
              rows={8}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-left text-sm font-semibold mb-1 text-gray-700">
              Date
            </label>
            <input
              type="number"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="Enter"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-left text-sm font-semibold mb-1 text-gray-700">
              Time
            </label>
            <input
              type="number"
              name="time"
              value={formData.time}
              onChange={handleChange}
              placeholder="Enter"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
           
            <label
              htmlFor="imageInput"
              className="w-full h-40 border-2 border-dashed border-gray-400 rounded-md flex flex-col justify-center items-center text-gray-400 cursor-pointer hover:border-blue-400"
            >
              <FaImage className="text-3xl mb-2 text-blue-600" />
              {formData.image ? (
                <span className="text-gray-700 text-sm">{formData.image.name}</span>
              ) : (
                <span className="text-sm">Add image</span>
              )}
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-auto">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Create
            </button>
            <button
              type="button"
              className="border border-blue-400 text-blue-400 px-6 py-2 rounded hover:bg-blue-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNews;
