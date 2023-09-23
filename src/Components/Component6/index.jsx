import { useState } from "react";
import "./index.css";

const Component6 = () => {
  const [questions, setQuestions] = useState([
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Madrid", "Paris"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "F. Scott Fitzgerald"],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Ag", "Au", "Fe", "Hg"],
      correctAnswer: "Au",
    },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill("")); // Initialize userAnswers as an array with empty strings

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleOptionSelect = (selectedOption) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(updatedUserAnswers);
  };

  return (
    <div>
      <h4>{questions[currentQuestionIndex].question}</h4>
      <ul>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={userAnswers[currentQuestionIndex] === option}
                onChange={() => handleOptionSelect(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>
        Next
      </button>
    </div>
  );
};

export default Component6;
