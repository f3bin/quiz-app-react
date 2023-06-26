import React, { useContext, useState } from "react";
import "./QuizPage.scss";
import QuizContext from "../../contexts/QuizProvider";
import ScorePage from "../scorePage/ScorePage.jsx";
import { useHandleNext } from "../hooks/useHandleNext";
import { useOptionClick } from "../hooks/useOptionClick";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const QuizPage = () => {
  const [show, setShow] = useState(false);
  const { Quest, state, setState } = useContext(QuizContext);
  const handleNext = useHandleNext(setState);
  const optionClick = useOptionClick(setState);

  const handleShow = () => setShow(true);
  
  const handleModalNext = () =>{
    setShow(false);
    handleNext();
    setState(prevState =>({
      ...prevState,
      score:prevState.score + 10    
    }))
  }

  return (
    <>
      { 
        <Modal  show={show} onHide={handleModalNext} animation={false}>
          <Modal.Header>  
            <Modal.Title>Wohooo!</Modal.Title>
          </Modal.Header>
          <Modal.Body>You have got 10  points as Bonus reward!</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={ handleModalNext}>
              Next
            </Button>
          </Modal.Footer>
        </Modal>
      }
      
      {state.index <= Quest.length - 1 ? (
        <div className="quiz-page">
          <div className="quiz-container ">
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
                          onClick={() => optionClick(option, item)}
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
                <button
                  onClick={state.index === 4 ? handleShow : handleNext}
                  className="next-button"
                >
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
