import React, { useState } from 'react';
import Header from '../ui/Header';
import { Outlet } from 'react-router';
import SideBar from '../ui/SideBar';
import { IoClose } from 'react-icons/io5';

const Root = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64">
          <SideBar />
        </div>

        {/* Sidebar for Mobile */}
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-300 ${
            sidebarOpen ? 'visible opacity-100' : 'invisible opacity-0'
          } lg:hidden`}
          onClick={toggleSidebar} // Close when clicking outside
        >
          <div
            className={`absolute top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 flex flex-col`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={toggleSidebar}
                className="text-red-800 p-2 rounded-md hover:bg-gray-100 transition"
              >
                <IoClose size={26} />
              </button>
            </div>

            {/* Sidebar Menu */}
            {/* Pass toggleSidebar so clicking menu items closes sidebar */}
            <SideBar onMenuItemClick={toggleSidebar} />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
