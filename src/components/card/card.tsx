import { Text, View } from "react-native";
import { CardProps } from "../../types";
import { PropsWithChildren } from "react";
import { styles } from "./card.styles";

export const Card = ({ title, children }: PropsWithChildren<CardProps>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};
