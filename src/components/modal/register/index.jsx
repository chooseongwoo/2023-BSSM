import React from "react";

import "./style.css";

const Register = ({ closeRegisterModal }) => {
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeRegisterModal();
    }
  };

  return (
    <div className="modal-container" onClick={handleModalClick}>
      <div className="register">
        <p id="cancel" onClick={closeRegisterModal}>
          X
        </p>
        <div className="inputs">
          <div className="input">
            <input type="text" placeholder="이름을 입력하시오." />
          </div>
          <div className="input">
            <input type="text" placeholder="이메일을 입력하시오." />
          </div>
          <div className="input">
            <input type="password" placeholder="비밀번호를 입력하시오." />
          </div>
        </div>
        <button className="submit">가입하기</button>
      </div>
    </div>
  );
};

export default Register;
