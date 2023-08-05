import React from "react";
import Add from "./../images/avatar/pexels-hatice-baran-17742455.jpg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={Add} alt="avatar" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Add} alt="avatar" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Add} alt="avatar" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
