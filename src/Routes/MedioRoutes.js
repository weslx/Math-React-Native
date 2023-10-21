import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MedioTela from "../MedioTela";
import FundamentalScreen from "../FundamentalTela";
import HomeScreen from "../HomeScreen.js";
import colors from "../../colors";
import CongruencCalculator from "../Medio/LeiDeSeno/leideseno";
import JurosCompostos from "../Medio/Juros/JurosCompostos";
import JurosSimples from "../Medio/Juros/JurosSimples";
import CalculadoraLogaritmo from "../Medio/Logaritma/logaritma";

const Stack = createStackNavigator();

function MedioRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="Logaritma"
        component={CalculadoraLogaritmo}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="Juros Simples"
        component={JurosSimples}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="Juros Compostos"
        component={JurosCompostos}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
        name="Senos"
        component={CongruencCalculator}
      />
      <Stack.Screen
        name="Fundamental"
        component={FundamentalScreen}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />

      <Stack.Screen
        name="Medio"
        component={MedioTela}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </Stack.Navigator>
  );
}

export default MedioRoutes;
