import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MedioTela from "../MedioTela";
import FundamentalScreen from "../FundamentalTela";
import HomeScreen from "../HomeScreen.js";
import colors from "../../colors";
import CongruencCalculator from "../Medio/congruenc";
import JurosCompostos from "../Medio/JurosCompostos";

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
        name="JurosCompostos"
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
      <Stack.Screen name="Fundamental" component={FundamentalScreen} />

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
