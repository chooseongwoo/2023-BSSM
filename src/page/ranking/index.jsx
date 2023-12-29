import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";
import axios from "axios";

const Ranking = () => {
  const [scoreRank, setScoreRank] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/score/view")
      .then((res) => {
        setScoreRank(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
          {scoreRank.map((item, index) => (
            <tr key={item.rank}>
              <td>{index + 1}</td>
              <td>{item.nickname}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;
