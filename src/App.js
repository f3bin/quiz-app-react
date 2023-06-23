import QuizPage from "./components/quizPage/QuizPage";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<QuizPage />} />
      </Routes>

    </>
  );
}

export default App;
