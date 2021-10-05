import React from "react";
import { View, Text, StatusBar } from "react-native";
import { Router } from "./Router";
import { BreedProvider } from "./src/context/breed";

export function App() {
  return (
    <BreedProvider>
      <StatusBar backgroundColor="#000" />
      <Router />
    </BreedProvider>
  );
}
