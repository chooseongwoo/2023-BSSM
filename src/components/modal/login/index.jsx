import React from "react";

import "./style.css";

const Login = ({ closeLoginModal, openRegisterModal }) => {
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeLoginModal();
    }
  };

  const handleSubmit = () => {};

  return (
    <div className="modal-container" onClick={handleModalClick}>
      <div className="login">
        <p className="cancel" onClick={closeLoginModal}>
          X
        </p>
        <div className="inputs">
          <div className="input">
            <input type="text" placeholder="이메일을 입력하시오." />
          </div>
          <div className="input">
            <input type="password" placeholder="비밀번호를 입력하시오." />
          </div>
        </div>
        <button className="submit" onClick={handleSubmit}>
          로그인
        </button>
        <div
          className="toRegister"
          onClick={() => {
            closeLoginModal();
            openRegisterModal();
          }}
        >
          회원가입 하러 가기
        </div>
      </div>
    </div>
  );
};

export default Login;
