import React from 'react';
import Header from '../ui/Header'
import { Outlet } from 'react-router';
import SideBar from '../ui/SideBar';

const Root = () => (

    
 <main>

    <Header></Header>
     <div className="flex">
    <SideBar/>
    <div className="flex-1 p-4">
      <Outlet /> {/* Renders HomeLayout, EditProfile, etc. */}
    </div>
  </div>
 </main>
);

export default Root;
