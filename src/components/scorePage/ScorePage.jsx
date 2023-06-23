import React, { useContext } from "react";
import "./ScorePage.scss";
import QuizContext from "../../contexts/QuizProvider";

const ScorePage = () => {
  const { score, Quest } = useContext(QuizContext);
  return (
    <div className="score-page">
      <div className="score-container">
        <h1>Game Over</h1>
        {score <= Quest.length - 2 ? (
          <>
            <h3>Unlucky! Try Again ..!!!</h3>
            <span>
              You Have got {score} points out of {Quest.length}
            </span>
          </>
        ) : (
          <>
            <h3>congrats ! you are a tough gamer</h3>
            <span>
              You got {score} our of {Quest.length}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default ScorePage;
