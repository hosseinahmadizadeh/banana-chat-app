import React from "react";
import Add from "../images/avatar/person.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header">
        <span className="logo">Squash Chat</span>
        <button>Log out</button>
      </div>
      <div className="user">
        <img src={Add} alt="avatar" />
        <span className="name">Hossein</span>
      </div>
    </div>
  );
};

export default Navbar;
