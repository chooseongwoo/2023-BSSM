import React, { useState } from "react";

import "./style.css";
import axios from "axios";

const Register = ({ closeRegisterModal }) => {
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeRegisterModal();
    }
  };

  const initialFormData = {
    nickname: "",
    email: "",
    pw: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  console.log(formData);

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/api/auth/signup", formData)
      .then((res) => {
        alert(res.data.message);
        closeRegisterModal();
      })
      .catch((res) => {
        alert(res.data.error);
      });
  };

  return (
    <div className="modal-container" onClick={handleModalClick}>
      <div className="register">
        <p className="cancel" onClick={closeRegisterModal}>
          X
        </p>
        <div className="inputs">
          <div className="input">
            <input
              type="text"
              placeholder="이름을 입력하시오."
              onChange={(e) => {
                setFormData({
                  ...formData,
                  nickname: e.target.value,
                });
                console.log(e.target.value);
              }}
              autoFocus
            />
          </div>
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
          가입하기
        </button>
      </div>
    </div>
  );
};

export default Register;
