import { Text, Pressable, StyleSheet } from "react-native";
import { AnswerOptionProps } from "../types";
import { useQuizContext } from "../providers/quiz-provider";

export const AnswerOption = ({ option }: AnswerOptionProps) => {
  const { selectedOption, setSelectedOption } = useQuizContext();
  const isSelected = option === selectedOption;

  return (
    <Pressable
      style={[
        styles.container,
        isSelected && {
          backgroundColor: "#E1F396",
          borderColor: "#E1F396",
        },
      ]}
      onPress={() => setSelectedOption(option)}
    >
      <Text>{option}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 50,
    borderColor: "#d7d7d7",
    backgroundColor: "white",
  },
});
