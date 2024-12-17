import { Text, View } from "react-native";
import { styles } from "./question-card.styles";
import { AnswerOption } from "../answer-option/answer-option";
import { QuestionCardProps } from "../../types";
import { Card } from "../card/card";

export const QuestionCard = ({ question }: QuestionCardProps) => {
  const selectedOption = question.options[3];

  const onPress = (answer: string) => {
    console.log("Pressed", answer);
  };

  return (
    <Card title={question.title}>
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
    </Card>
  );
};
