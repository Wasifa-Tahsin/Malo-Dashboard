import React from "react";
import { FaPlus } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";

const categories = [
  { id: "#1233", name: "Agriculture & Forestry / Wildlife" },
  { id: "#1233", name: "Education" },
  { id: "#1233", name: "Food & Hospitality" },
  { id: "#1233", name: "Automotive Vehicles" },
  { id: "#1233", name: "Artist/Personality/Public Figure" },
  { id: "#1233", name: "Artist/Personality/Public Figure" },
  { id: "#1233", name: "Artist/Personality/Public Figure" },
];

const Categories = () => {
  return (
    <section className="w-full min-h-screen bg-[#fffaf1] flex flex-col p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
        <h2 className="text-[18px] font-semibold text-gray-800">Categories</h2>
        <button className="flex items-center justify-center gap-2 bg-[#1BAE70] hover:bg-[#159c62] text-white px-4 py-2 rounded-lg text-sm font-medium transition">
          <FaPlus size={14} />
          Add New
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 overflow-x-auto">
        <table className="w-full text-sm text-left min-w-[500px]">
          <thead>
            <tr className="border-b border-gray-200 text-gray-600">
              <th className="py-3 px-2">SL No.</th>
              <th className="py-3 px-2">Category Name</th>
              <th className="py-3 px-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-2 text-gray-600">{cat.id}</td>
                <td className="py-3 px-2 text-gray-800 font-medium">
                  {cat.name}
                </td>
                <td className="py-3 px-2 text-center flex justify-center gap-2">
                  <button className="bg-[#0DADEA] hover:bg-[#099cd5] text-white p-2 rounded-md transition">
                    <MdEdit size={16} />
                  </button>
                  <button className="bg-[#F44336] hover:bg-[#e13528] text-white p-2 rounded-md transition">
                    <MdDelete size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Categories;
