/* eslint-disable @typescript-eslint/no-use-before-define */
/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import RadiosContextProvider from "../contexts/RadiosContext";
import RadioScreen from "../screens/RadioScreen";
import { RootStackParamList } from "../types";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RadiosContextProvider>
        <RootNavigator />
      </RadiosContextProvider>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RadioScreen" component={RadioScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
