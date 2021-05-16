import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#2E8B57",
    padding: 10,
    paddingTop: 16,
    fontSize: 16,
    borderRadius: 6,
    marginBottom: 0,
    textAlignVertical: "top",
    minHeight: 20,
  },
  errorText: {
    color: "crimson",
    marginBottom: 10,
    marginTop: 6,
  },
});
