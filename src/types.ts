export interface Question {
    title: string;
    correctAnswer: string;
    options: string[];
  }
  export interface QuestionCardProps {
    question: Question;
    onPress: (str: string) => void;
  }

  export interface AnswerOptionProps {
    option: string;
    isSelected?: boolean;
    onPress: (str: string) => void;
  }