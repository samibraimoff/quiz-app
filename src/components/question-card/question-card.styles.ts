import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
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
    question: {
        fontSize: 24,
        fontWeight: '500'
    },
    answerContainer: {
        gap: 10
    }
});
