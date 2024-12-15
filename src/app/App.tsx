import { StatusBar } from "expo-status-bar";
import React from "react";
import { QuizScreen } from "../screens/quiz-screen";

export default function App() {
  return (
    <>
      <QuizScreen />
      <StatusBar style="auto" />
    </>
  );
}
