import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { ListBreeds } from "../../components/ListBreeds";
import { Container } from "./styles";

export function HomeScreen() {
  return (
    <Container>
      <Header />
      <ListBreeds />
    </Container>
  );
}
