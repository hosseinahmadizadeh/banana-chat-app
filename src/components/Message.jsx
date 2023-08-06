import React from "react";
import Avatar from "../images/avatar/pexels-hatice-baran-17742455.jpg";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={Avatar} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={Avatar} alt="sentImage" />
      </div>
    </div>
  );
};

export default Message;
