import React from "react";

import Attach from "../images/icons/attach-paperclip-symbol.png";
import Image from "../images/icons/image.png";
import Send from "../images/icons/send.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Message..."></input>
      <div className="send">
        <img src={Attach} alt="attachment" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Image} alt="img" />
        </label>
        <button>
          <img src={Send} alt="send" />
        </button>
      </div>
    </div>
  );
};

export default Input;
