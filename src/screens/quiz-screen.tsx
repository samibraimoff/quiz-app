import { Text, View, SafeAreaView, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./quiz-screen.styles";
import { QuestionCard } from "../components/question-card/question-card";
import questions from "../data/questions";
import { Card } from "../components/card/card";
import { Fragment } from "react";

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
        <Pressable
          onPress={() => console.log("pressed")}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Next</Text>
          <FontAwesome
            name="long-arrow-right"
            size={20}
            color="white"
            style={styles.buttonIcon}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
