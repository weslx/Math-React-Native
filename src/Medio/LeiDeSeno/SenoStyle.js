import { StyleSheet } from "react-native";
import colors from "../../../colors";

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  inputs: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    color: colors.primary,
    marginBottom: 10,
    width: 200,
    height: 50,
  },
  font: {
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default styles;
