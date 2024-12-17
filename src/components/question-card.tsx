import { StyleSheet, View } from "react-native";
import { AnswerOption } from "./answer-option";
import { QuestionCardProps } from "../types";
import { Card } from "./card";

export const QuestionCard = ({ question }: QuestionCardProps) => {
  return (
    <Card title={question.title}>
      <View style={styles.answerContainer}>
        {question.options.map((option) => (
          <AnswerOption key={option} option={option} />
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
