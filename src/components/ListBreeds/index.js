import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { api } from "../../services/api";
import { BreedCard } from "../BreedCard";
import { Separator } from "../BreedCard/styles";

export function ListBreeds() {
  const [pageNumber, setPageNumber] = useState(1);
  const [breeds, setBreeds] = useState([]);

  async function getBreeds() {
    const { data } = await api.get(`/breeds?limit=10&page=${pageNumber}`);
    setBreeds([...breeds, ...data]);

    setPageNumber(pageNumber + 1);
  }

  useEffect(() => {
    getBreeds();
  }, []);

  return (
    <FlatList
      numColumns={2}
      ListFooterComponent={() => (
        <ActivityIndicator
          size="small"
          color="#000"
          style={{ marginTop: 16 }}
        />
      )}
      data={breeds}
      keyExtractor={(item) => String(item.id)}
      style={{ width: "100%" }}
      columnWrapperStyle={{
        justifyContent: "space-between",
        paddingHorizontal: 16
      }}
      ItemSeparatorComponent={() => <Separator />}
      onEndReached={getBreeds}
      onEndReachedThreshold={0.8}
      renderItem={({ item }) => <BreedCard data={item} />}
    />
  );
}
