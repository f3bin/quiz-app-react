
import React, { createContext, useState } from "react";
import { quizData } from "../quizData";

const QuizContext = createContext({});

export const QuizProvider = ({ children }) => {
  const [state, setState] = useState({
    index: 0,
    score: 0,
    btn: false,
    disabled: false,
    selectedOption: null,
    isCorrect:false
  });

  const Quest = quizData;

  return (
    <QuizContext.Provider value={{ Quest, state, setState }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
