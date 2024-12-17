import {
  PressableProps,
} from "react-native";

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

  export interface CustomButtonProps extends PressableProps {
    title: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  }