import { Text, View } from "react-native";
import { styles } from "./question-card.styles";
import { AnswerOption } from "../answer-option/answer-option";

export const QuestionCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>What is React-Native?</Text>
      <View style={styles.answerContainer}>
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
      </View>
    </View>
  );
};
