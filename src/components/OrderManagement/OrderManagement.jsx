import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";

const orders = [
  {
    id: "#1233",
    name: "Annette Black",
    date: "12/03/25",
    total: "ZMW 200",
    address: "West Greenwich, RI",
    paymentStatus: "Paid",
    orderStatus: "Completed",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "#1234",
    name: "Jerome Bell",
    date: "12/03/25",
    total: "ZMW 200",
    address: "Jericho, NY 11753",
    paymentStatus: "Pending",
    orderStatus: "Canceled",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "#1235",
    name: "Ronald Richards",
    date: "12/03/25",
    total: "ZMW 200",
    address: "Aurora, OR 97002",
    paymentStatus: "Paid",
    orderStatus: "Paid",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "#1236",
    name: "Dianne Russell",
    date: "12/03/25",
    total: "ZMW 200",
    address: "Midland Park, NJ 072",
    paymentStatus: "Paid",
    orderStatus: "Shipped",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: "#1237",
    name: "Albert Flores",
    date: "12/03/25",
    total: "ZMW 200",
    address: "Saint Cloud, FL 349",
    paymentStatus: "Pending",
    orderStatus: "Completed",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: "#1238",
    name: "Eleanor Pena",
    date: "12/03/25",
    total: "ZMW 200",
    address: "Vineland, NJ 08360",
    paymentStatus: "Paid",
    orderStatus: "In Progress",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const getBadgeClasses = (status) => {
  switch (status) {
    case "Paid":
      return "bg-green-50 text-green-600 border-green-400";
    case "Pending":
      return "bg-orange-50 text-orange-500 border-orange-300";
    default:
      return "bg-gray-100 text-gray-500 border-gray-200";
  }
};

const getOrderBadge = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-50 text-green-600 border-green-400";
    case "Shipped":
      return "bg-yellow-50 text-yellow-500 border-yellow-300";
    case "Canceled":
      return "bg-red-50 text-red-500 border-red-300";
    case "In Progress":
      return "bg-blue-50 text-blue-500 border-blue-300";
    default:
      return "bg-gray-100 text-gray-500 border-gray-200";
  }
};

const OrderManagement = () => {
  const [search, setSearch] = useState("");
  const filtered = orders.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full min-h-screen bg-[#fffaf1] flex flex-col p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          Order Management
        </h2>
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white text-sm"
          />
          <IoSearchOutline className="absolute left-3 top-2.5 text-gray-500 text-lg" />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 overflow-x-auto">
        <table className="w-full min-w-[700px] text-sm text-left">
          <thead>
            <tr className="border-b border-gray-200 text-gray-600">
              <th className="py-3 px-2">Order No.</th>
              <th className="py-3 px-2">Customer</th>
              <th className="py-3 px-2">Date</th>
              <th className="py-3 px-2">Total</th>
              <th className="py-3 px-2 hidden lg:table-cell">Address</th>
              <th className="py-3 px-2">Payment</th>
              <th className="py-3 px-2">Status</th>
              <th className="py-3 px-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-2 text-gray-600">{item.id}</td>
                <td className="py-3 px-2 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                  />
                  <span className="font-medium text-gray-700">{item.name}</span>
                </td>
                <td className="py-3 px-2 text-gray-600">{item.date}</td>
                <td className="py-3 px-2 text-[#1BAE70] font-medium">
                  {item.total}
                </td>
                <td className="py-3 px-2 text-gray-600 hidden lg:table-cell">
                  {item.address}
                </td>
                <td className="py-3 px-2">
                  <span
                    className={`border rounded-full px-3 py-1 text-xs font-medium ${getBadgeClasses(
                      item.paymentStatus
                    )}`}
                  >
                    {item.paymentStatus}
                  </span>
                </td>
                <td className="py-3 px-2">
                  <span
                    className={`border rounded-full px-3 py-1 text-xs font-medium ${getOrderBadge(
                      item.orderStatus
                    )}`}
                  >
                    {item.orderStatus}
                  </span>
                </td>
                <td className="py-3 px-2 flex justify-center gap-2">
                  <button className="bg-[#0DADEA] hover:bg-[#099cd5] text-white p-2 rounded-md">
                    <FaRegEye size={16} />
                  </button>
                  <button className="bg-[#4CAF50] hover:bg-[#3e9f42] text-white p-2 rounded-md">
                    <MdEdit size={16} />
                  </button>
                  <button className="bg-[#F44336] hover:bg-[#e13528] text-white p-2 rounded-md">
                    <MdDelete size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex flex-wrap justify-center items-center mt-5 gap-3 text-gray-600 text-sm">
          <button className="hover:text-blue-500">Previous</button>
          <span className="text-blue-600 font-semibold">2</span>
          <span>, 3, .......... 100</span>
          <button className="hover:text-blue-500">Next</button>
        </div>
      </div>
    </section>
  );
};

export default OrderManagement;
