import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotificationPage from "./notifications";
import CreatePage from "./create";
import { useRouter, useSegments } from "expo-router";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "#fcfaf2",
        },
      }}
    >
      <Stack.Screen
        name="notifications"
        component={NotificationPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="create"
        component={CreatePage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
