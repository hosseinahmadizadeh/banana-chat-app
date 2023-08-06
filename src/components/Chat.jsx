import React from "react";

import Cam from "../images/icons/video.png";
import Add from "../images/icons/add-friend.png";
import More from "../images/icons/option.png";

import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="camera" />
          <img src={Add} alt="add friend" />
          <img src={More} alt="more options" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
