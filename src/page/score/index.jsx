import React from "react";

import { Link } from "react-router-dom";

import "./style.css";

const Score = () => {
  let totalScore = localStorage.getItem("totalScore");

  return (
    <div className="score">
      <p>최대 점수 420점 중</p>
      <p>
        당신의 점수는 <span>{totalScore}점</span>입니다.
      </p>
      <Link to="/ranking">
        <button>랭킹 확인</button>
      </Link>
    </div>
  );
};

export default Score;
