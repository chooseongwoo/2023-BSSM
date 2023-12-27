import React, { useState } from "react";
import "./style.css";

import Header from "../../components/header";
import Login from "../../components/modal/login";
import Register from "../../components/modal/register";
import Grade from "../../components/grade";

const Main = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const isLogin = true;

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  return (
    <div>
      <Header
        openLoginModal={openLoginModal}
        openRegisterModal={openRegisterModal}
      />
      {isLoginModalOpen && (
        <Login
          closeLoginModal={closeLoginModal}
          openRegisterModal={openRegisterModal}
        />
      )}
      {isRegisterModalOpen && (
        <Register closeRegisterModal={closeRegisterModal} />
      )}
      {isLogin && <Grade />}
    </div>
  );
};

export default Main;
