import { useContext } from "react";
import { QuizContext } from "../providers/quiz-provider";

export const useQuizContext = () => {
  return useContext(QuizContext);
};