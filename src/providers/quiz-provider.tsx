import {
  PropsWithChildren,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import questions from "../data/questions";
import { Question } from "../types";

interface QuizContext {
  question?: Question;
  questionIndex: number;
  selectedOption?: string;
  score: number;
  totalQuestions: number;
  bestScore: number;
  onNextQuestion: () => void;
  setSelectedOption: (option: string) => void;
  isFinished?: boolean;
}

export const QuizContext = createContext<QuizContext>({
  questionIndex: 0,
  score: 0,
  totalQuestions: 0,
  onNextQuestion: () => {},
  setSelectedOption: () => {},
  bestScore: 0,
  isFinished: false,
});

export const QuizProvider = ({ children }: PropsWithChildren) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const question = questions[questionIndex];
  const isFinished = questionIndex >= questions.length;

  useEffect(() => {
    if (isFinished && score > bestScore) {
      setBestScore(score);
    }
  }, [isFinished]);

  const resetGame = () => {
    setQuestionIndex(0);
    setSelectedOption("");
    setScore(0);
  };

  const onNextQuestion = () => {
    if (isFinished) {
      resetGame();
      return;
    }

    if (selectedOption === question?.correctAnswer) {
      setScore((currScore) => currScore + 1);
    }
    setQuestionIndex((questionIndex) => questionIndex + 1);
  };
  return (
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        onNextQuestion,
        selectedOption,
        setSelectedOption,
        score,
        totalQuestions: questions.length,
        bestScore,
        isFinished,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
