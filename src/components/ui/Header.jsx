import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import maloLogo from '../../assets/images/maloLogo.png';
import userLogo from '../../assets/images/maloUserLogo.png';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header className="container mx-auto bg-white shadow-md px-4 py-3">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            className="w-[97px] h-[72px] sm:w-[120px] sm:h-[88px] object-contain"
            src={maloLogo}
            alt="Malo Logo"
          />
        </div>

        {/* Notifications & User */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="relative text-[#1870CA]  text-white rounded-full p-2 sm:p-3 hover:bg-blue-700 transition"    style={{
    background: 'linear-gradient(90deg, rgba(5, 85, 191, 1) 0%, rgba(91, 210, 244, 1) 100%)'
  }}>
           <Link to='/notifications'> <IoMdNotificationsOutline className="text-xl sm:text-xl" /></Link>
            {/* Optional: Notification badge */}
            <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <img
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              src={userLogo}
              alt="User"
            />
            <p className="text-sm sm:text-base font-medium text-gray-800 truncate">
              Robert Smith
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
