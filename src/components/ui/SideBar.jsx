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

const SideBar = ({ onMenuItemClick }) => {
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
    <div className="w-64 bg-white shadow-md h-full p-4 overflow-y-auto">
      <ul className="space-y-2">
        {menu.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.to}
              onClick={() => onMenuItemClick && onMenuItemClick()} // ✅ Close sidebar on click
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md hover:bg-blue-200  ${
                  isActive ? 'bg-[#4ea5df] font-semibold' : ''
                }`
              }
            >
              {item.icon} {item.label}
            </NavLink>
          </li>
        ))}

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
              {['settings/profile','settings/about-us','settings/terms','settings/privacy'].map((link, i) => (
                <li key={i}>
                  <NavLink
                    to={link}
                    onClick={() => onMenuItemClick && onMenuItemClick()}
                    className="block p-2 rounded-md hover:bg-gray-100"
                  >
                    {link.split('/')[1].replace('-', ' ').toUpperCase()}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Help Dropdown */}
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
                <NavLink to="/help" onClick={() => onMenuItemClick && onMenuItemClick()} className="block p-2 rounded-md hover:bg-gray-100">Help</NavLink>
              </li>
              <li>
                <NavLink to="/faq" onClick={() => onMenuItemClick && onMenuItemClick()} className="block p-2 rounded-md hover:bg-gray-100">FAQ</NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <NavLink
        to="/logout"
        onClick={() => onMenuItemClick && onMenuItemClick()}
        className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 mt-4"
      >
        <HiLogout size={20} /> Logout
      </NavLink>
    </div>
  );
};


export default SideBar;
