import React from 'react';

function Navbar({ user }) {
  return (
    <div className="w-full mb-4 px-6 py-3 bg-white/20 backdrop-blur-md shadow-md rounded-lg flex items-center justify-between">
      
      {/* Left side: App title */}
      <div className="text-2xl font-bold text-black">
        Duo-chat
      </div>

      {/* Center: Welcome message */}
      <h1 className="text-lg font-medium text-white">
        Welcome, <span className="text-yellow-200">{user.username}</span>
      </h1>

      {/* Right side: User profile pic */}
      <div className="flex items-center space-x-3">
        <img
          src={user.profilePic}
          alt="User"
          className="w-9 h-9 rounded-full border border-white shadow-sm"
        />
      </div>
    </div>
  );
}

export default Navbar;