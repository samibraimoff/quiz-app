import { Text, View, SafeAreaView, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./quiz-screen.styles";
import { QuestionCard } from "../components/question-card/question-card";

export const QuizScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Question 1 / 5</Text>
        </View>
        <View>
          <QuestionCard />
          <Text style={styles.time}>20 sec.</Text>
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
