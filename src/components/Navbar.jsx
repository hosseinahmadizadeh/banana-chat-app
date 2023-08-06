import React from "react";

import Logo from "../images/logo/butternut-squash.png";
import Add from "../images/avatar/person.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header">
        <div className="title">
          <img src={Logo} alt="logo" />
          <span className="appName">Squash</span>
        </div>
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
