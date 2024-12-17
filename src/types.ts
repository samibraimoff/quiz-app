import { Pressable } from "react-native";
import { ComponentProps } from "react";

export interface Question {
  title: string;
  correctAnswer: string;
  options: string[];
}
export interface QuestionCardProps {
  question: Question;
}

export interface AnswerOptionProps {
  option: string;
  isSelected?: boolean;
  onPress: () => void;
}
export interface CardProps {
  title: string;
}

export interface CustomButtonProps extends ComponentProps<typeof Pressable> {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
