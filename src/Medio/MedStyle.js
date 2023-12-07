import { StyleSheet } from "react-native";
import colors from "../../colors";

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
    shadowColor: "#000",
  },
  font: {
    fontWeight: "bold",
    fontSize: 25,
  },
  text: {
    color: colors.primary,
  },

  btn_text: {
    color: "white",
    textAlign: "center",
  },
  botao_calcular: {
    backgroundColor: colors.primary,
    height: 40,
    width: "50%",
    borderRadius: 10,
    padding: 10,
    width: 200,
    alignItems: "center",
    marginBottom: 15,
    marginTop: 15,
  },
});

export default styles;
