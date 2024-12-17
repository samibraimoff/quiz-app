import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { QuestionCard } from "../components/question-card";
import questions from "../data/questions";
import { Card } from "../components/card";
import { Fragment } from "react";
import { CustomButton } from "../components/custom-button";

export const QuizScreen = () => {
  const question = questions[0];

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Question 1 / 5</Text>
        </View>
        <View>
          {questions.length ? (
            <Fragment>
              <QuestionCard question={question} />
              <Text style={styles.time}>20 sec.</Text>
            </Fragment>
          ) : (
            <Card title="End of the game">
              <Text>Correct answers 4 / 5</Text>
            </Card>
          )}
        </View>
        <CustomButton
          title="Next"
          onLongPress={() => console.log("long pressed")}
          onPress={() => console.log("pressed")}
          rightIcon={
            <FontAwesome name="long-arrow-right" size={20} color="white" />
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FDFEF4",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    textAlign: "center",
    color: "#005055",
    fontSize: 18,
    fontWeight: "400",
  },
  time: {
    marginTop: 20,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});
