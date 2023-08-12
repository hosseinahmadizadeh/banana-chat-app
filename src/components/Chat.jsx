import React, { useContext } from "react";

import Cam from "../images/icons/video.png";
import Add from "../images/icons/add-friend.png";
import More from "../images/icons/option.png";

import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
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
