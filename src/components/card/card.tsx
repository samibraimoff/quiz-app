import { Text, View, StyleSheet } from "react-native";
import { CardProps } from "../../types";
import { PropsWithChildren } from "react";

export const Card = ({ title, children }: PropsWithChildren<CardProps>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    paddingVertical: 40,
    borderRadius: 20,
    gap: 20,
    // shadows
    // ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    // android
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});
