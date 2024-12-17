import { Text, View, Pressable, StyleSheet } from "react-native";
import { AnswerOptionProps } from "../../types";

export const AnswerOption = ({
  option,
  isSelected,
  onPress,
}: AnswerOptionProps) => {
  return (
    <Pressable
      style={[
        styles.container,
        isSelected && {
          backgroundColor: "#E1F396",
          borderColor: "#E1F396",
        },
      ]}
      onPress={onPress}
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
