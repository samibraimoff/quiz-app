import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { QuestionCard } from "../components/question-card";
import { Card } from "../components/card";
import { Fragment } from "react";
import { CustomButton } from "../components/custom-button";
import { useQuizContext } from "../providers/quiz-provider";

export const QuizScreen = () => {
  const { question, onNextQuestion, score, totalQuestions } = useQuizContext();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            Question {score} / {totalQuestions}
          </Text>
        </View>
        <View>
          {question ? (
            <Fragment>
              <QuestionCard question={question} />
              <Text style={styles.time}>20 sec.</Text>
            </Fragment>
          ) : (
            <Card title="End of the game">
              <Text>Correct answers {score} / 5</Text>
            </Card>
          )}
        </View>
        <CustomButton
          title="Next"
          onLongPress={() => console.log("long pressed")}
          onPress={onNextQuestion}
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
