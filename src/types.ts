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