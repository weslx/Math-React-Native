import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MedioTela from "../MedioTela";
import FundamentalScreen from "../FundamentalTela";
import HomeScreen from "../homescreen";
import colors from "../../colors";

const Stack = createStackNavigator();

function MedioRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
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
