import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Chat from "./components/Chat";
import Login from "./components/Login";

const Stack = createStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={Login} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <ChatStack />
    </NavigationContainer>
  );
}

export default function App() {
  return <RootNavigator />;
}
