import React from "react";

const approvals = [
  {
    orderNo: "#1233",
    name: "Annette Black",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    date: "12/03/25",
    total: "ZMW 200",
    type: "Product",
    paymentStatus: "Paid",
    approvalStatus: "Approved",
  },
  {
    orderNo: "#1233",
    name: "Jerome Bell",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    date: "12/03/25",
    total: "ZMW 200",
    type: "Event",
    paymentStatus: "Pending",
    approvalStatus: "Canceled",
  },
  {
    orderNo: "#1233",
    name: "Ronald Richards",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    date: "12/03/25",
    total: "ZMW 200",
    type: "Voucher",
    paymentStatus: "Paid",
    approvalStatus: "Approved",
  },
  {
    orderNo: "#1233",
    name: "Dianne Russell",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    date: "12/03/25",
    total: "ZMW 200",
    type: "Product",
    paymentStatus: "Paid",
    approvalStatus: "Waiting",
  },
  {
    orderNo: "#1233",
    name: "Albert Flores",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    date: "12/03/25",
    total: "ZMW 200",
    type: "Event",
    paymentStatus: "Pending",
    approvalStatus: "Approved",
  },
];

const statusClass = {
  Paid: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Approved: "bg-emerald-100 text-emerald-700",
  Waiting: "bg-sky-100 text-sky-700",
  Canceled: "bg-red-100 text-red-700",
};

const Approval = () => {
  return (
    <div className="min-h-screen bg-[#fffaf2] py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <h2 className="text-xl font-semibold text-gray-800">Approval</h2>
          <input
            type="text"
            placeholder="Search here..."
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-64"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 text-sm text-gray-600 text-left">
                <th className="py-3 px-4 font-medium">Order No.</th>
                <th className="py-3 px-4 font-medium">Customer Name</th>
                <th className="py-3 px-4 font-medium">Date</th>
                <th className="py-3 px-4 font-medium">Total</th>
                <th className="py-3 px-4 font-medium">Type</th>
                <th className="py-3 px-4 font-medium">Payment Status</th>
                <th className="py-3 px-4 font-medium">Approval Status</th>
                <th className="py-3 px-4 font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {approvals.map((row, index) => (
                <tr
                  key={index}
                  className="border-b last:border-0 text-sm text-gray-800"
                >
                  <td className="py-3 px-4">{row.orderNo}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={row.img}
                        alt={row.name}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                      <span>{row.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">{row.date}</td>
                  <td className="py-3 px-4">{row.total}</td>
                  <td className="py-3 px-4">{row.type}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${statusClass[row.paymentStatus]}`}
                    >
                      {row.paymentStatus}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${statusClass[row.approvalStatus]}`}
                    >
                      {row.approvalStatus}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="text-green-600 hover:bg-green-50 rounded p-1">
                        <i className="bi bi-check-circle-fill"></i>
                      </button>
                      <button className="text-red-600 hover:bg-red-50 rounded p-1">
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-5 text-sm text-gray-600">
          <span>
            Showing page <strong>2</strong> of 100
          </span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-500 text-white rounded-md">
              2
            </button>
            <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
              3
            </button>
            <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approval;
