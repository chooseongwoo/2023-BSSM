import React from "react";

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
          <table>
            <tbody>
              {leftSubject.map((subject, index) => (
                <tr>
                  <td key={index}>{subject}</td>
                  <td>
                    <form className="grade">
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
            <table>
              <tbody>
                {rightTopSubject.map((subject, index) => (
                  <tr>
                    <td key={index}>{subject}</td>
                    <td>
                      <form className="grade">
                        <select>
                          {grades.map((grade) => (
                            <option value={grade}>{grade}</option>
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
            <table>
              <tbody>
                {rightBottomSubject.map((subject, index) => (
                  <tr>
                    <td key={index}>{subject}</td>
                    <td>
                      <form className="grade">
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
        </div>
      </div>
      <button className="check">점수 확인</button>
    </div>
  );
};

export default Grade;