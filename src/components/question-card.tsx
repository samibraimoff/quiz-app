import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AnswerOption } from "./answer-option";
import { QuestionCardProps } from "../types";
import { Card } from "./card";

export const QuestionCard = ({ question }: QuestionCardProps) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  const onPress = (option: string) => {
    setSelectedOption(option);
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

const styles = StyleSheet.create({
  answerContainer: {
    gap: 14,
  },
});
