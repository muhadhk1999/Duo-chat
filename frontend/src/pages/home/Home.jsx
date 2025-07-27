import React from 'react';
import SideBar from '../../components/sideBar/sideBar';
import MessageContainer from '../../components/messages/MessageContainer';
import Navbar from '../../components/navBar/navBar';
import { useAuthContext } from '../../context/AuthContext';

function Home() {
  const { authUser } = useAuthContext();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Navbar (only visible if user is authenticated) */}
      {authUser && <Navbar user={authUser} />}

      {/* Main Chat Layout */}
      <div className="flex w-full max-w-5xl sm:h-[500px] md:h-[750px] rounded-lg overflow-hidden
        bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 shadow-xl">
        <SideBar />
        <MessageContainer />
      </div>
    </div>
  );
}

export default Home;
