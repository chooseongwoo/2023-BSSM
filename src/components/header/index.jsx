import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Header = ({ openLoginModal, openRegisterModal }) => {
  return (
    <div className="header">
      <Link to="/">
        <p className="title">SRS</p>
      </Link>
      <div className="path">
        <Link to="/ranking" style={{ textDecoration: "none" }}>
          <p>랭킹</p>
        </Link>
        <p onClick={openLoginModal}>로그인</p>
        <p onClick={openRegisterModal}>회원가입</p>
      </div>
    </div>
  );
};

export default Header;
