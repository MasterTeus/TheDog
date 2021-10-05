import React from "react";
import { View, Text, FlatList } from "react-native";
import { Header } from "../../components/Header";
import { ListBreeds } from "../../components/ListBreeds";
import { Container } from "./styles";

export function HomeScreen() {
  return (
    <FlatList
      ListHeaderComponent={<Header />}
      ListFooterComponent={<ListBreeds />}
    />
  );
}
