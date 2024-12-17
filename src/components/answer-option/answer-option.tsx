import { Text, View, Pressable } from "react-native";
import { styles } from "./answer-option.styles";
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
