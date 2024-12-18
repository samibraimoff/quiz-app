import { PropsWithChildren, createContext, useState, useEffect } from "react";
import questions from "../data/questions";
import { Question } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    loadBestScore();
  }, []);

  useEffect(() => {
    if (isFinished && score > bestScore) {
      setBestScore(score);
      saveBestScore(score);
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

  const saveBestScore = async (value: number) => {
    try {
      await AsyncStorage.setItem("best-score", value.toString());
    } catch (error) {
      console.log(error);
    }
  };

  const loadBestScore = async () => {
    try {
      const score = await AsyncStorage.getItem("best-score");
      if (score !== null) {
        setBestScore(Number.parseInt(score));
      }
    } catch (error) {
      console.log(error);
    }
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
