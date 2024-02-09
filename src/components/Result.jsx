import useQuizStore from "../stores/useQuizStore";

export const Result = () => {
  const answers = useQuizStore((state) => state.answers);

  const correctNum = answers.filter((answer) => answer.isCorrect).length;
  return (
    <div>
      <p className="font-bold uppercase text-lg"> Result</p>
      <p className="text-xl font-semibold text-blue-800 bg-blue-100 w-fit mx-auto py-2 px-4 rounded-full mt-6">
        {correctNum} / {answers.length}
      </p>
    </div>
  );
};
