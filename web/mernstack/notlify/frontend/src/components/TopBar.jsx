import React from 'react';
import ActionButton from './ActionButton';
import { useNavigate } from 'react-router';

const TopBar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logout clicked');
    navigate('/login');
  }
  return (
    <header className="h-16 bg-white flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Search</h1>
      <ActionButton text="Logout" onClick={handleLogout} />
    </header>
  );
};

export default TopBar;
