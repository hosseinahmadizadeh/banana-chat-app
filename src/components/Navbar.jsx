import React, { useContext } from "react";

import Logo from "../images/logo/butternut-squash.png";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="header">
        <div className="title">
          <img src={Logo} alt="logo" />
          <span className="appName">Squash</span>
        </div>
        <button onClick={() => signOut(auth)}>Log out</button>
      </div>
      <div className="user">
        <img src={currentUser.photoURL} alt="avatar" />
        <span className="name">{currentUser.displayName}</span>
      </div>
    </div>
  );
};

export default Navbar;
