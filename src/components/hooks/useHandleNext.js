

import { useContext } from "react";
import QuizContext from "../../contexts/QuizProvider";

export const useHandleNext = () => {

     const { setState } = useContext(QuizContext);
     const handleNext = () => {
          setState((prevstate) => ({
               ...prevstate,
               index: prevstate.index + 1,
               btn: true,
               disabled: false,
               selectedOption: null,
          }));
     };

     return handleNext;
};

