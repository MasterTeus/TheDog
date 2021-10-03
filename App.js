import React from "react";
import { View, Text, StatusBar } from "react-native";
import { Router } from "./Router";

export function App() {
  return (
    <>
      <StatusBar backgroundColor="#000" />
      <Router />
    </>
  );
}
