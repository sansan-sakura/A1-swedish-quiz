import useQuizStore from "../stores/useQuizStore"; // Adjust the path accordingly

export const CurrentQuestionZustand = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
  const question = questions[currentQuestionIndex];

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold">Test Your Swedish 🇸🇪</h2>
      <h1 className="text-xl ">Question: {question.question}</h1>
      <div>
        <ul className="flex gap-10">
          {question?.choices?.map((choice) => (
            <li key={choice} className="">
              <button className="">{choice}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
