

import React, { useContext } from "react";
import "./QuizPage.scss";
import QuizContext from "../../contexts/QuizProvider";
import ScorePage from "../scorePage/ScorePage.jsx";
import { useHandleNext } from "../hooks/useHandleNext";
import { useOptionClick } from "../hooks/useOptionClick";

const QuizPage = () => {
  const { Quest, state, setState } = useContext(QuizContext);
  const handleNext = useHandleNext(setState);
  const optionClick = useOptionClick(setState);

  return (
    <>
      {state.index <= Quest.length - 1 ? (
        <div className="quiz-page">
          <div className="quiz-container">
            <div className="quiz-title">
              <h1>Quiz Time ..!</h1>
              <span>Score: {state.score}</span>
            </div>
            <div className="quiz-body">
              {Quest.slice(state.index, state.index + 1).map((item) => (
                <div key={item.id}>
                  <h3>{item.question}</h3>
                  <div className="option-container">
                    {item.options.map((option) => {
                      const isSelected = option === state.selectedOption;
                      
                      return (
                        <button
                          key={option}
                          disabled={state.disabled}
                          onClick={() => optionClick(option,item)}
                          className={
                            isSelected
                              ? state.isCorrect
                                ? "options option-correct"
                                : "options option-wrong"
                              : "options"
                          }
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
              {state.btn && (
                <button onClick={handleNext} className="next-button">
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <ScorePage />
      )}
    </>
  );
};

export default QuizPage;
