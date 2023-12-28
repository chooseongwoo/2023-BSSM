import React, { useState } from "react";
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

  const [scores, setScores] = useState({
    meister: 0,
    subjects: {
      수학: "A",
      통합사회: "A",
      통합과학: "A",
      "컴퓨터 구조": "A",
      "전기 전자 기초": "A",
      "성공적인 직업생활": "A",
      프로그래밍: "A",
      "실용 국어": "A",
      "실용 영어": "A",
      체육: "A",
      음악: "A",
      "디자인 일반": "A",
    },
  });

  const calculateScore = () => {
    if (parseInt(scores.meister, 10) > 150) {
      alert(
        "마이스터 역량 인증제는 150을 초과할 수 없습니다. 다시 입력해주세요."
      );
      return;
    }

    let totalScore = 0;

    for (const subject in scores.subjects) {
      const grade = scores.subjects[subject];
      const credit = getCreditsForSubject(subject);
      const gradeMultiplier = getGradeMultiplier(grade);

      totalScore += gradeMultiplier * credit;
    }

    totalScore += parseInt(scores.meister, 10) || 0;

    console.log("총 점수는", totalScore, "입니다.");

    localStorage.setItem("totalScore", totalScore);
    window.location.href = "/score";
  };

  const getCreditsForSubject = (subject) => {
    const creditMap = {
      수학: 6,
      통합사회: 6,
      통합과학: 6,
      "컴퓨터 구조": 4,
      "전기 전자 기초": 2,
      "성공적인 직업생활": 2,
      프로그래밍: 10,
      "실용 국어": 4,
      "실용 영어": 4,
      체육: 2,
      음악: 4,
      "디자인 일반": 4,
    };

    return creditMap[subject] || 0;
  };

  const getGradeMultiplier = (grade) => {
    const gradeMap = {
      A: 5,
      B: 4,
      C: 3,
      D: 2,
      E: 1,
    };

    return gradeMap[grade] || 0;
  };

  const handleGradeChange = (subject, grade) => {
    const newScores = { ...scores };
    newScores.subjects[subject] = grade;
    setScores(newScores);
  };

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
                      <select
                        onChange={(e) =>
                          handleGradeChange(subject, e.target.value)
                        }
                        value={scores.subjects[subject]}
                      >
                        {grades.map((grade) => (
                          <option key={grade} value={grade}>
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
                        <select
                          onChange={(e) =>
                            handleGradeChange(subject, e.target.value)
                          }
                          value={scores.subjects[subject]}
                        >
                          {grades.map((grade) => (
                            <option key={grade} value={grade}>
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
                        <select
                          onChange={(e) =>
                            handleGradeChange(subject, e.target.value)
                          }
                          value={scores.subjects[subject]}
                        >
                          {grades.map((grade) => (
                            <option key={grade} value={grade}>
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
            <p className="grade-title">마이스터 역량 인증제</p>
            <input
              type="number"
              min={0}
              name="meister"
              max={150}
              value={scores.meister}
              onChange={(e) =>
                setScores({ ...scores, meister: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <button className="check" onClick={calculateScore}>
        점수 확인
      </button>
    </div>
  );
};

export default Grade;
