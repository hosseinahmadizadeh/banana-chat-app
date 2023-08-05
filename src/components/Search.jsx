import React from "react";
import Add from "./../images/avatar/pexels-hatice-baran-17742455.jpg";

const Search = () => {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img src={Add} alt="avatar" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
