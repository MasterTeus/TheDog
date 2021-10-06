import React from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Router } from "./Router";
import { BreedProvider } from "./src/context/breed";

export function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BreedProvider>
        <StatusBar backgroundColor="#000" />
        <Router />
      </BreedProvider>
    </SafeAreaView>
  );
}
