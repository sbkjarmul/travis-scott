import React, { useState } from 'react'
import { questions } from "../assets/helpers/questions"

const RobotChecker = ({ setIsRobotChecker, setIsAlert, setIsForm }) => {
  const number = Math.floor(Math.random() * questions.length - 1) + 1;
  const [question, setQuestion] = useState(questions[number]);

  const checkAndColorAnswer = (e) => {
    const isCorrectAnswer = e.target.id === question.correct;
    const answer = e.target;

    if (isCorrectAnswer) {
      answer.style.backgroundColor = '#00D667';
      setTimeout(() => {
        closeWindows();
      }, 500)
    }

    if (!isCorrectAnswer) {
      answer.style.backgroundColor = '#F8115A';
      reloadQuestion();
    }
  }

  const reloadQuestion = () => {
    setTimeout(() => {
      setIsRobotChecker(false);
    }, 500);

    setTimeout(() => {
      setIsRobotChecker(true);
    }, 500);
  }

  const closeWindows = () => {
    setIsAlert(true);
    setIsRobotChecker(false);

    setTimeout(() => {
      setIsAlert(false);
      setIsForm(false);
    }, 1000);
  }

  return (
    <div className="robot-checker">
      <h1 className="robot-checker__question">{question.question}</h1>
        <ul className="robot-checker__answer-list">
          <li className="robot-checker__answer" onClick={checkAndColorAnswer} id="a">
            {question.a}
          </li>
          <li className="robot-checker__answer" onClick={checkAndColorAnswer} id="b">
            {question.b}
          </li>
          <li className="robot-checker__answer" onClick={checkAndColorAnswer} id="c">
            {question.c}
          </li>
          <li className="robot-checker__answer" onClick={checkAndColorAnswer} id="d">
            {question.d}
          </li>
        </ul>
    </div>
  )
}

export default RobotChecker;