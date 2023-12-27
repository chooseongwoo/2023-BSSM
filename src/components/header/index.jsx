import React from "react";

import "./style.css";

const Header = () => {
  return (
    <div className="container">
      <p className="title">SRS</p>
      <div className="path">
        <p>로그인</p>
        <p>회원가입</p>
      </div>
    </div>
  );
};

export default Header;
