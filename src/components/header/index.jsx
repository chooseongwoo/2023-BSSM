import React from "react";

import "./style.css";

const Header = ({ openLoginModal, openRegisterModal }) => {
  return (
    <div className="header">
      <p className="title">SRS</p>
      <div className="path">
        {/* <p>랭킹</p> */}
        <p onClick={openLoginModal}>로그인</p>
        <p onClick={openRegisterModal}>회원가입</p>
      </div>
    </div>
  );
};

export default Header;
