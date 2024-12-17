import { Text, View } from "react-native";
import { styles } from "./question-card.styles";
import { AnswerOption } from "../answer-option/answer-option";
import { QuestionCardProps } from "../../types";

export const QuestionCard = ({ question, onPress }: QuestionCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question.title}</Text>
      <View style={styles.answerContainer}>
        <AnswerOption onPress={onPress} option={question.options[0]} />
        <AnswerOption onPress={onPress} option={question.options[1]} />
        <AnswerOption onPress={onPress} option={question.options[2]} />
        <AnswerOption onPress={onPress} option={question.options[3]} />
      </View>
    </View>
  );
};
