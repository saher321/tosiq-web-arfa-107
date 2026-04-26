import React from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';

const AppLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <SideBar/>

    {/* Main area */}
    <div className="flex flex-col flex-1">
      
      {/* Topbar */}
      <TopBar />

      {/* Page Content */}
      <main className="flex-1 ml-36 p-6 overflow-y-auto bg-white">
        {children}
      </main>
    </div>
  </div>
  );
};

export default AppLayout;
