import React, { useState } from "react";
import "./style.css";

import Header from "../../components/header";
import Login from "../../components/modal/login";
import Register from "../../components/modal/register";

const Main = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div>
      <Header openLoginModal={openLoginModal} />
      {isLoginModalOpen && <Login closeLoginModal={closeLoginModal} />}
    </div>
  );
};

export default Main;
