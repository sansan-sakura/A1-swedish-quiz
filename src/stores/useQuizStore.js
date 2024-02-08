import { create } from "zustand";

import data from "../static/data.json";

const useQuizStore = create((set, get) => ({
  questions: data.questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  isCorrect: false,

  submitAnswer: (choice) => {
    const question = get().questions[get().currentQuestionIndex >= 0 && get().currentQuestionIndex];
    const isCorrect = question.correct_answer === choice;
    if (!question) {
      throw new Error(
        "Could not find question! Check to make sure you are passing the question id correctly."
      );
    }

    console.log(question, isCorrect, choice);
    set((state) => ({
      isCorrect,
      answers: [
        ...state.answers,
        {
          choice,
          question,
          isCorrect: question.correct_answer === choice,
        },
      ],
    }));
  },

  goToNextQuestion: () => {
    set((state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        return { quizOver: true, isCorrect: false };
      } else {
        return { currentQuestionIndex: state.currentQuestionIndex + 1, isCorrect: false };
      }
    });
  },

  restart: () => {
    set({
      answers: [],
      currentQuestionIndex: 0,
      quizOver: false,
    });
  },
}));

export default useQuizStore;
