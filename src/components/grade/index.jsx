import React from "react";

import { Link } from "react-router-dom";

import "./style.css";

const Grade = () => {
  const grades = ["A", "B", "C", "D", "E"];
  const leftSubject = [
    "수학",
    "통합사회",
    "통합과학",
    "컴퓨터 구조",
    "전기 전자 기초",
    "성공적인 직업생활",
    "프로그래밍",
  ];
  const rightTopSubject = ["실용 국어", "실용 영어"];
  const rightBottomSubject = ["체육", "음악", "디자인 일반"];

  return (
    <div className="grade-container">
      <div className="grade">
        <div className="left">
          <p className="grade-title">보통 교과 및 전문 교과 과목</p>
          <table className="gradeTable">
            <tbody>
              {leftSubject.map((subject, index) => (
                <tr key={index}>
                  <td>{subject}</td>
                  <td>
                    <form className="grade-form">
                      <select>
                        {grades.map((grade) => (
                          <option key={grade}>{grade}</option>
                        ))}
                      </select>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="right">
          <div className="top">
            <p className="grade-title">진로 선택 과목</p>
            <table className="gradeTable">
              <tbody>
                {rightTopSubject.map((subject, index) => (
                  <tr key={index}>
                    <td>{subject}</td>
                    <td>
                      <form className="grade-form">
                        <select>
                          {grades.map((grade) => (
                            <option value={grade} key={grade}>
                              {grade}
                            </option>
                          ))}
                        </select>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bottom">
            <p className="grade-title">체육·예술 과목</p>
            <table className="gradeTable">
              <tbody>
                {rightBottomSubject.map((subject, index) => (
                  <tr key={index}>
                    <td>{subject}</td>
                    <td>
                      <form className="grade-form">
                        <select>
                          {grades.map((grade) => (
                            <option key={grade}>{grade}</option>
                          ))}
                        </select>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="grade-title">마이스터 역량 인증제</p>
            <input type="number" min={0} name="meister" max={150}/>
          </div>
        </div>
      </div>
      <Link to="/score">
        <button className="check">점수 확인</button>
      </Link>
    </div>
  );
};

export default Grade;
