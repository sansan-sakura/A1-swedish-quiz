import { useEffect, useMemo, useState } from "react";
import useQuizStore from "../stores/useQuizStore";

const buttonColors = [
  "bg-blue-900 hover:bg-blue-900/90 text-white",
  "bg-blue-700 hover:bg-blue-700/90 text-white",
  "bg-blue-400 hover:bg-blue-400/90",
  "bg-blue-200 hover:bg-blue-200/90",
];

export const CurrentQuestionZustand = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
  const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);
  const handleSubmit = useQuizStore((state) => state.submitAnswer);
  const isCorrect = useQuizStore((state) => state.isCorrect);
  const question = questions[currentQuestionIndex];
  const [isAnswered, setIsAnswered] = useState(false);

  const progressBarWidth = useMemo(
    () => (currentQuestionIndex / questions.length) * 100,
    [currentQuestionIndex, questions]
  );

  useEffect(() => {
    setIsAnswered(false);
  }, [currentQuestionIndex]);
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div className="w-[500px] text-center">
      <div className="w-full h-4 mb-6 relative">
        <span className="absolute -top-6 right-5 text-sm font-semibold">
          {currentQuestionIndex + 1}/{questions.length}
        </span>
        <div className="rounded bg-blue-300 h-2" style={{ width: progressBarWidth + "%" }} />
      </div>
      <h2 className="text-2xl font-semibold">🇸🇪 Test Your Swedish 🇸🇪</h2>
      <div className="mt-6">
        <h1 className="text-xl flex flex-col gap-2">
          <span className="font-semibold">Question No.{currentQuestionIndex + 1} :</span>
          <span> {question.question}</span>
        </h1>
        <ul className="flex gap-10 my-10 justify-center">
          {question?.choices?.map((choice, i) => (
            <li key={choice} className="">
              <button
                onClick={() => {
                  handleSubmit(choice);
                  setIsAnswered(true);
                }}
                className={`${buttonColors[i]} ${
                  isAnswered
                    ? question.correct_answer === choice
                      ? "outline-4 outline-yellow-500 outline outline-offset-2"
                      : "outline-4 outline-blue-900 outline outline-offset-2"
                    : ""
                } px-2 py-1.5 rounded-sm text-base font-bold uppercase text-stone-800 transition-colors duration-150`}
              >
                {choice}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        disabled={!isAnswered}
        onClick={() => goToNextQuestion()}
        className="uppercase font-bold text-lg px-3 py-1 bg-yellow-600 rounded-sm text-white hover:bg-yellow-600/90 transition-colors duration-150 disabled:bg-yellow-600/50"
      >
        NEXT
      </button>
    </div>
  );
};
