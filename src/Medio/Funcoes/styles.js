import { StyleSheet } from "react-native";

export default StyleSheet.create({
  between: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputGroup: {
    flexDirection: "column",
    marginBottom: 10,
  },
  inputContainer: {
    borderBottomWidth: 3,
    borderBottomColor: "#000",
    paddingBottom: 2,
    marginRight: 5,
  },
  input: {
    width: 60,
    textAlign: "center",
    margin: 0,
  },
  equationText: {
    fontSize: 30,
    padding: 8,
    marginTop: 5,
  },
});
