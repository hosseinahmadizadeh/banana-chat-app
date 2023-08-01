import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Chat />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
