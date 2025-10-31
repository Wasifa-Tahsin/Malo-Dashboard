import React, { useState } from 'react';
import { NavLink } from 'react-router'; // ✅ Correct import
import {
  MdDashboard,
  MdPeople,
  MdSettings,
  MdOutlineMail,
  MdFeedback,
  MdOutlineDescription,
} from 'react-icons/md';
import { HiLogout } from 'react-icons/hi';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const SideBar = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  
  const menu = [
    { label: 'Dashboard', to: '/dashboard', icon: <MdDashboard size={20} /> },
    { label: 'User Management', to: '/users', icon: <MdPeople size={20} /> },
    { label: 'Order Management', to: '/orders', icon: <MdFeedback size={20} /> },
    { label: 'Categories', to: '/categories', icon: <MdOutlineDescription size={20} /> },
    { label: 'Ad Promotional', to: '/ads', icon: <MdOutlineDescription size={20} /> },
    { label: 'Add News', to: '/news', icon: <MdOutlineMail size={20} /> },
    { label: 'Add Post', to: '/posts', icon: <MdFeedback size={20} /> },
    { label: 'Add Voucher', to: '/vouchers', icon: <MdSettings size={20} /> },
    { label: 'Add Event', to: '/events', icon: <MdSettings size={20} /> },
    { label: 'Approval', to: '/approval', icon: <MdSettings size={20} /> },
  ];

  return (
    <div className="w-64 bg-white shadow-md h-screen p-4 overflow-y-auto">
      <ul className="space-y-2">
        {menu.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 ${
                  isActive ? 'bg-gray-200 font-semibold' : ''
                }`
              }
            >
              {item.icon} {item.label}
            </NavLink>
          </li>
        ))}

       

        {/* Help & FAQ Dropdown */}
        <li>
          <button
            onClick={() => setHelpOpen(!helpOpen)}
            className="w-full flex items-center justify-between gap-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            <span className="flex items-center gap-2">
              <MdSettings size={20} /> Help & FAQs
            </span>
            {helpOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </button>
          {helpOpen && (
            <ul className="ml-6 mt-1 space-y-1">
              <li>
                <NavLink to="/help" className="block p-2 rounded-md hover:bg-gray-100">
                  Help
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="block p-2 rounded-md hover:bg-gray-100">
                  FAQ
                </NavLink>
              </li>
            </ul>
          )}
        </li>









         {/* Settings Dropdown */}
        <li>
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className="w-full flex items-center justify-between gap-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            <span className="flex items-center gap-2">
              <MdSettings size={20} /> Settings
            </span>
            {settingsOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </button>
          {settingsOpen && (
            <ul className="ml-6 mt-1 space-y-1">
              <li>
                <NavLink to="/profile" className="block p-2 rounded-md hover:bg-gray-100">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" className="block p-2 rounded-md hover:bg-gray-100">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms" className="block p-2 rounded-md hover:bg-gray-100">
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy" className="block p-2 rounded-md hover:bg-gray-100">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <NavLink
        to="/logout"
        className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 mt-4"
      >
        <HiLogout size={20} /> Logout
      </NavLink>
    </div>
  );
};

export default SideBar;
