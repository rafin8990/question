import { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./App.css";


const questions = [
  {
    questionText: "Qual o idiomafalado no Brasil?",
    answerOptions: [
      { answerText: "Português", isCorrect: true },
      { answerText: "Inglês", isCorrect: false },
      { answerText: "Francês", isCorrect: false },
      { answerText: "Alemão", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    answerOptions: [
      { answerText: "Japão e Serra Leoa", isCorrect: true },
      { answerText: "Austrália e Afeganistã", isCorrect: false },
      { answerText: "Itália e Chade", isCorrect: false },
      { answerText: "Brasil e Congo", isCorrect: false },
    ],
  },
  {
    questionText: "Qual empresa criou o Iphone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "Como aprender a programar?",
    answerOptions: [
      { answerText: "Praticando o que se aprende", isCorrect: true },
      { answerText: "Vendo vídeo", isCorrect: false },
      { answerText: "Lendo", isCorrect: false },
      { answerText: "Dormindo", isCorrect: false },
    ],
  },
];

function App() {
  const [greenProgress, setGreenProgress] = useState(0)
  const [redProgress, setRedProgress] = useState(0)
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);


  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setGreenProgress(greenProgress + 25)
      setScore(score + 1);
      setRight(right+1)
    }
    else {
      setRedProgress(redProgress + 25)
      setWrong(wrong + 1)
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div>
      <div className="d-flex around">
        <div className="mb-3 w-100">
          <ProgressBar now={greenProgress} label={`${greenProgress}%`} />
          <div className="question-count text-dark">
            <span className="text-dark"> {right}</span>/{questions.length}
          </div>
        </div>
        <div className="text-center bg-dark rounded-circle mb-3 w-0 h-100 p-3 ms-3 me-3">
          {greenProgress}
        </div>
        <div className="mb-3 w-100">
          <ProgressBar variant="danger" now={redProgress} label={`${redProgress}%`} />
          <div className="question-count text-dark">
            <span className="text-dark">{wrong}</span>/{questions.length}
          </div>
        </div>
      </div>
      <div className="app">

        {showScore ? (
          <div className="score-section">
            Você pontuou {score} de {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Questão {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>



            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    onClick={() => handleAnswer(answerOption.isCorrect)}
                    key={index}
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
