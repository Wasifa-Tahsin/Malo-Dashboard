import React from "react";
import { FaEye, FaReply } from "react-icons/fa";

const HelpCenter = () => {
  const tickets = [
    { id: "#1233", date: "2/11/12", email: "bockely@att.com", phone: "(907) 555-0101", message: "I Didn’t Receive My Referral R..." },
    { id: "#1234", date: "5/27/15", email: "csilvers@rizon.com", phone: "(270) 555-0117", message: "How Long Does It Take to Re..." },
    { id: "#1235", date: "9/18/16", email: "qamah@mall.com", phone: "(219) 555-0114", message: "Can I Refer Someone Outside..." },
    { id: "#1236", date: "7/27/13", email: "xterris@gmail.com", phone: "(252) 555-0126", message: "My Referral Signed Up, But I..." },
  ];

  return (
    <section className="bg-[#f9fafb] p-4 sm:p-6 md:p-8 rounded-md shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">Help Center</h2>
        <button className="text-blue-600 text-sm sm:text-base font-medium hover:underline">View all</button>
      </div>

      {/* Table View for medium+ screens */}
      <div className=" overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-center text-gray-600 text-sm md:text-base border-b whitespace-nowrap">
              <th className="py-2 px-2 sm:px-3 font-medium">Ticket ID</th>
              <th className="py-2 px-2 sm:px-3 font-medium">Date</th>
              <th className="py-2 px-2 sm:px-3 font-medium">Email</th>
              <th className="py-2 px-2 sm:px-3 font-medium">Mobile Number</th>
              <th className="py-2 px-2 sm:px-3 font-medium">Message</th>
              <th className="py-2 px-2 sm:px-3 font-medium text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((item, i) => (
              <tr key={i} className="text-sm md:text-base text-gray-700 border-b hover:bg-gray-50 transition">
                <td className="py-2 px-2 sm:px-3 truncate">{item.id}</td>
                <td className="py-2 px-2 sm:px-3 truncate">{item.date}</td>
                <td className="py-2 px-2 sm:px-3 truncate">{item.email}</td>
                <td className="py-2 px-2 sm:px-3 truncate">{item.phone}</td>
                <td className="py-2 px-2 sm:px-3 truncate max-w-[200px]">{item.message}</td>
                <td className="flex items-center gap-2 justify-center py-2 px-2 sm:px-3">
                  <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md">
                    <FaEye size={14} />
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md">
                    <FaReply size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      {/* <div className="sm:hidden mt-4 space-y-3">
        {tickets.map((item, i) => (
          <div key={i} className="p-3 bg-white rounded-md shadow flex flex-col gap-2">
            <div className="flex justify-between text-gray-600 text-sm">
              <span className="font-medium">Ticket ID:</span> {item.id}
            </div>
            <div className="flex justify-between text-gray-600 text-sm">
              <span className="font-medium">Date:</span> {item.date}
            </div>
            <div className="flex justify-between text-gray-600 text-sm">
              <span className="font-medium">Email:</span> {item.email}
            </div>
            <div className="flex justify-between text-gray-600 text-sm">
              <span className="font-medium">Mobile:</span> {item.phone}
            </div>
            <div className="text-gray-700 text-sm truncate">{item.message}</div>
            <div className="flex gap-2 mt-2">
              <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md flex-1 flex justify-center">
                <FaEye size={14} />
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md flex-1 flex justify-center">
                <FaReply size={14} />
              </button>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default HelpCenter;
