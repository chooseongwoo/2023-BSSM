import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Ranking = () => {
  const scoreRank = [
    {
      rank: 1,
      name: "정소울",
      score: 270,
    },
    {
      rank: 2,
      name: "추성우",
      score: 250,
    },
    {
      rank: 3,
      name: "송윤서",
      score: 230,
    },
  ];

  return (
    <div className="ranking">
      <Link to="/">
        <button className="toMain">메인으로 가기</button>
      </Link>
      <table className="rankTable">
        <thead>
          <tr>
            <th>순위</th>
            <th>이름</th>
            <th>점수</th>
          </tr>
        </thead>
        <tbody>
          {scoreRank.map((item) => (
            <tr key={item.rank}>
              <td>{item.rank}</td>
              <td>{item.name}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;
