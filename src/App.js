import QuizPage from "./components/quizPage/QuizPage";
import { Routes, Route } from 'react-router-dom';
import './App.scss'

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
