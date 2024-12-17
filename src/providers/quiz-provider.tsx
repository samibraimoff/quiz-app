import { PropsWithChildren, createContext, useState, useContext } from "react";
import questions from "../data/questions";
import { Question } from "../types";

interface QuizContext {
  question?: Question;
  questionIndex: number;
  onNextQuestion: () => void;
  selectedOption?: string;
  setSelectedOption: (option: string) => void;
  score: number;
  totalQuestions: number;
}

export const QuizContext = createContext<QuizContext>({
  questionIndex: 0,
  onNextQuestion: () => {},
  setSelectedOption: () => {},
  score: 0,
  totalQuestions: 0,
});

export const QuizProvider = ({ children }: PropsWithChildren) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const question = questions[questionIndex];
  const isFinished = questionIndex >= questions.length;

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
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  return useContext(QuizContext);
};
