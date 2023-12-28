import React, { useState } from "react";

import "./style.css";
import axios from "axios";

const Login = ({ closeLoginModal, openRegisterModal }) => {
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeLoginModal();
    }
  };

  const initialFormData = {
    email: "",
    pw: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = () => {
    axios.post("http://localhost:3000/api/auth/login", formData).then((res) => {
      alert("로그인 성공");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", formData.email);
      closeLoginModal();
    });
  };

  return (
    <div className="modal-container" onClick={handleModalClick}>
      <div className="login">
        <p className="cancel" onClick={closeLoginModal}>
          X
        </p>
        <div className="inputs">
          <div className="input">
            <input
              type="text"
              placeholder="이메일을 입력하시오."
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: e.target.value,
                });
              }}
              autoFocus
            />
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="비밀번호를 입력하시오."
              onChange={(e) => {
                setFormData({
                  ...formData,
                  pw: e.target.value,
                });
              }}
            />
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
