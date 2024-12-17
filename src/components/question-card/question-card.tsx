import { Text, View } from "react-native";
import { styles } from "./question-card.styles";
import { AnswerOption } from "../answer-option/answer-option";
import { QuestionCardProps } from "../../types";

export const QuestionCard = ({ question }: QuestionCardProps) => {
  const selectedOption = question.options[3];

  const onPress = (answer: string) => {
    console.log("Pressed", answer);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question.title}</Text>
      <View style={styles.answerContainer}>
        {question.options.map((option) => (
          <AnswerOption
            key={option}
            onPress={() => onPress(option)}
            option={option}
            isSelected={selectedOption === option}
          />
        ))}
      </View>
    </View>
  );
};
