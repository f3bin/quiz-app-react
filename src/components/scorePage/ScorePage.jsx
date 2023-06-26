import React, { useContext } from "react";
import "./ScorePage.scss";
import QuizContext from "../../contexts/QuizProvider";

const ScorePage = () => {
  const { state, Quest } = useContext(QuizContext);
  return (
    <div className="score-page">
      <div className="score-container">
        <h1>Game Over</h1>
        
          <>
            <h3>congrats ! you are a tough gamer</h3>
            <span>
              Your Score is :  {state.score}
            </span>
          </>
        
      </div>
    </div>
  );
};

export default ScorePage;
