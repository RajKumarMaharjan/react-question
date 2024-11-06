import React, { useState } from "react";
import qBank from "./components/QuestionBank";
import Question from "./components/Question";
import Score from "./components/Score";

const App = () => {
  const [questionBank] = useState(qBank);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    checkAnswer();
    handleNextQuestion();
  };

  const checkAnswer = () => {
    if (selectedOption === questionBank[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questionBank.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedOption("");
    } else {
      setQuizEnd(true);
    }
  };

  return (
    <div className="h-[100vh]">
      <div className="flex flex-col justify-center items-center mt-96">
      <h1 className="my-8 font-bold text-4xl underline">Quiz App</h1>
      {!quizEnd ? (
        <Question
          question={questionBank[currentQuestion]}
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          onSubmit={handleFormSubmit}
        />
      ) : (
        <Score
          score={score}
          onNextQuestion={handleNextQuestion}
          className="score"
        /> 
      )}
    </div>
    </div>
  );
};

export default App;
