import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand";

export const App = () => {
  return (
    <div className="flex justify-center pt-[200px] min-h-screen w-full bg-amber-50">
      <CurrentQuestionZustand />
    </div>
  );
};
