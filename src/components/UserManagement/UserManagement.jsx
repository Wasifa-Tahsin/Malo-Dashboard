import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

const users = [
  {
    id: "#1233",
    name: "Annette Black",
    email: "bockely@att.com",
    phone: "(907) 555-0101",
    address: "West Greenwich, RI",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "#1233",
    name: "Jerome Bell",
    email: "csilvers@rizon.com",
    phone: "(270) 555-0117",
    address: "Jericho, NY 11753",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "#1233",
    name: "Ronald Richards",
    email: "qamaho@mail.com",
    phone: "(219) 555-0114",
    address: "Aurora, OR 97002",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "#1233",
    name: "Dianne Russell",
    email: "xterris@gmail.com",
    phone: "(252) 555-0126",
    address: "Midland Park, NJ 072",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: "#1233",
    name: "Albert Flores",
    email: "xterris@gmail.com",
    phone: "(217) 555-0113",
    address: "Saint Cloud, FL 349",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: "#1233",
    name: "Eleanor Pena",
    email: "xterris@gmail.com",
    phone: "(480) 555-0103",
    address: "Vineland, NJ 08360",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: "#1233",
    name: "Floyd Miles",
    email: "xterris@gmail.com",
    phone: "(205) 555-0100",
    address: "Castleton On Hudson",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: "#1233",
    name: "Cody Fisher",
    email: "xterris@gmail.com",
    phone: "(603) 555-0123",
    address: "Rockford, FL 61109",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: "#1233",
    name: "Ralph Edwards",
    email: "xterris@gmail.com",
    phone: "(684) 555-0102",
    address: "Anna Maria, FL 346",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: "#1233",
    name: "Devon Lane",
    email: "xterris@gmail.com",
    phone: "(406) 555-0120",
    address: "Mountain View, C 3",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];

const UserManagement = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full min-h-screen bg-[#fffaf1] flex flex-col p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[18px] font-semibold text-gray-800">User Management</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white text-sm"
          />
          <IoSearchOutline className="absolute left-3 top-2.5 text-gray-500 text-lg" />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-gray-200 text-gray-600">
              <th className="py-3 px-2">SL No.</th>
              <th className="py-3 px-2">Full Name</th>
              <th className="py-3 px-2">Email</th>
              <th className="py-3 px-2">Mobile Number</th>
              <th className="py-3 px-2">Address</th>
              <th className="py-3 px-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-2 text-gray-600">{user.id}</td>
                <td className="py-3 px-2 flex items-center gap-3">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-medium text-gray-700">{user.name}</span>
                </td>
                <td className="py-3 px-2 text-gray-600">{user.email}</td>
                <td className="py-3 px-2 text-gray-600">{user.phone}</td>
                <td className="py-3 px-2 text-gray-600">{user.address}</td>
                <td className="py-3 px-2 text-center">
                  <button className="bg-[#f15d3b] hover:bg-[#e04a28] text-white p-2 rounded-md">
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-5 gap-3 text-gray-600 text-sm">
          <button className="hover:text-blue-500">Previous</button>
          <span className="text-blue-600 font-semibold">2</span>
          <span>, 3, .......... 100</span>
          <button className="hover:text-blue-500">Next</button>
        </div>
      </div>
    </section>
  );
};

export default UserManagement;
