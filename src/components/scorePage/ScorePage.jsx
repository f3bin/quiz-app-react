import React, { useContext } from "react";
import "./ScorePage.scss";
import QuizContext from "../../contexts/QuizProvider";

const ScorePage = () => {
  const { state, Quest } = useContext(QuizContext);
  return (
    <div className="score-page">
      <div className="score-container">
        <h1>Game Over</h1>
        {state.score  <= Quest.length - 2 ? (
          <>
            <h3>Unlucky! Try Again ..!!!</h3>
            <span>
              You Have got {state.score} points out of {Quest.length}
            </span>
          </>
        ) : (
          <>
            <h3>congrats ! you are a tough gamer</h3>
            <span>
              You got {state.score} out of {Quest.length}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default ScorePage;
