import React from "react";
import { FaEye, FaReply } from "react-icons/fa";

const HelpCenter = () => {
  const tickets = [
    {
      id: "#1233",
      date: "2/11/12",
      email: "bockely@att.com",
      phone: "(907) 555-0101",
      message: "I Didn’t Receive My Referral R...",
    },
    {
      id: "#1233",
      date: "5/27/15",
      email: "csilvers@rizon.com",
      phone: "(270) 555-0117",
      message: "How Long Does It Take to Re...",
    },
    {
      id: "#1233",
      date: "9/18/16",
      email: "qamah@mall.com",
      phone: "(219) 555-0114",
      message: "Can I Refer Someone Outside...",
    },
    {
      id: "#1233",
      date: "7/27/13",
      email: "xterris@gmail.com",
      phone: "(252) 555-0126",
      message: "My Referral Signed Up, But I...",
    },
  ];

  return (
    <section className="bg-[#f9fafb] p-6 rounded-md shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Help Center</h2>
        <button className="text-blue-600 text-sm font-medium hover:underline">
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-center  text-gray-600 text-sm border-b">
              <th className="pb-3 font-medium">Ticket ID</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Email</th>
              <th className="pb-3 font-medium">Mobile Number</th>
              <th className="pb-3 font-medium">Message</th>
              <th className="pb-3 font-medium text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((item, i) => (
              <tr
                key={i}
                className="text-sm text-gray-700 border-b hover:bg-gray-50 transition"
              >
                <td className="py-3">{item.id}</td>
                <td>{item.date}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.message}</td>
                <td className="flex items-center gap-2 justify-center py-3">
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
    </section>
  );
};

export default HelpCenter;
