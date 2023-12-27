import React from "react";

import { Link } from "react-router-dom";

import "./style.css";

const Score = () => {
  return (
    <div className="score">
      <p>
        당신의 점수는 <span>230점</span>입니다.
      </p>
      <Link to="/ranking">
        <button>랭킹 확인</button>
      </Link>
    </div>
  );
};

export default Score;
