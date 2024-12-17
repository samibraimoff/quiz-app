import { StatusBar } from "expo-status-bar";
import { QuizScreen } from "../screens/quiz-screen";
import { QuizProvider } from "../providers/quiz-provider";

export default function App() {
  return (
    <>
      <QuizProvider>
        <QuizScreen />
      </QuizProvider>
      <StatusBar style="auto" />
    </>
  );
}
