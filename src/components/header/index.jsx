import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Header = ({ openLoginModal, openRegisterModal }) => {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none", marginLeft: "20%" }}>
        <p className="title">SRS</p>
      </Link>
      <div className="path">
        <Link to="/ranking" style={{ textDecoration: "none" }}>
          <p>랭킹</p>
        </Link>
        {!localStorage.getItem("token") ? (
          <>
            <p onClick={openLoginModal}>로그인</p>
            <p onClick={openRegisterModal}>회원가입</p>
          </>
        ) : (
          <p
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            로그아웃
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
