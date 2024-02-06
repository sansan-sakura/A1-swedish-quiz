import { createContext, useContext, useState } from "react";

import questions from "../static/data.json";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizOver, setQuizOver] = useState(false);

  const submitAnswer = (questionId, answerIndex) => {
    const question = questions.find((q) => q.id === questionId);

    if (!question) {
      throw new Error(
        "Could not find question! Check to make sure you are passing the question id correctly."
      );
    }

    if (question.options[answerIndex] === undefined) {
      throw new Error(
        `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
      );
    }

    setAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex,
      },
    ]);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex + 1 === questions.length) {
      setQuizOver(true);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const restart = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setQuizOver(false);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        answers,
        currentQuestionIndex,
        quizOver,
        submitAnswer,
        goToNextQuestion,
        restart,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
