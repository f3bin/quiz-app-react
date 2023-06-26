import { useContext } from "react";
import QuizContext from "../../contexts/QuizProvider";

export const useOptionClick = () => {
  const { setState, state } = useContext(QuizContext);
  const optionClick = (option, item) => {
    const isCorrect = option === item.answer;

    setState((prevState) => ({
      ...prevState,
      selectedOption: option,
      disabled: true,
      btn: true,
      score: isCorrect ? prevState.score + 1 : prevState.score,
      isCorrect: isCorrect,
    }));
  };

  return optionClick;
};


