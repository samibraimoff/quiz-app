import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FDFEF4",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20
  },
  title: {
    textAlign: 'center',
    color: "#005055",
    fontSize: 18,
    fontWeight: '400'
  },
  time: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16
  },
  buttonContainer: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14
  },
  buttonIcon: {
    position: 'absolute',
    right: 20
  }
});
