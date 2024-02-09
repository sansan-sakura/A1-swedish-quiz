import { useState } from "react";
import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand";

export const App = () => {
  const [isStart, setIsStart] = useState(false);
  return (
    <div className="flex justify-center pt-[80px] min-h-screen w-full bg-amber-50">
      <div className="w-[500px] text-center">
        <h2 className="text-2xl font-semibold mb-10">🇸🇪 Test Your Swedish 🇸🇪</h2>
        {isStart ? (
          <CurrentQuestionZustand />
        ) : (
          <div>
            <button
              onClick={() => setIsStart(true)}
              className="py-1.5 px-2 rounded-sm bg-blue-800 uppercase font-semibold text-white mt-10 animate-bounce"
            >
              Click here to start
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
