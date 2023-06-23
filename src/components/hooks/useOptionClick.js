

import { useContext } from "react";
import QuizContext from "../../contexts/QuizProvider";



export const useOptionClick = () => {
  const { setState } = useContext(QuizContext);
  const optionClick = (option, item) => {
    const isCorrect = option === item.answer && setState(prevState => ({
      ...prevState,
      isCorrect: true
    }));

    
    setState((prevState) => ({
      ...prevState,
      selectedOption: option,
      disabled: true,
      btn: true,
      score: isCorrect ? prevState.score + 1 : prevState.score,
    }));
  };

  return optionClick;
};


