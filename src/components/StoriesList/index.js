import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Modal, ActivityIndicator } from "react-native";
import { categories } from "../../helpers/mock";
import { StorieCard } from "../StorieCard";

import {
  Container,
  Separator,
  Header,
  Image,
  Title,
  CloseButton,
  StoriesImage
} from "./styles";

import { Feather } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import { api } from "../../services/api";

export function StoriesList() {
  const [dogData, setDogData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [mock, setMock] = useState(null);

  async function getDogData(id) {
    const { data } = await api.get(`/images/search?limit=3&breed_id=${id}`);
    setDogData(data);
  }

  function openModal(breed) {
    setModalVisible(true);
    setMock(breed);
    getDogData(breed.id_images);
  }

  function closeModal() {
    setModalVisible(!modalVisible);
    setMock(null);
    setDogData([]);
  }

  return (
    <Container>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={() => String(Math.random())}
        ItemSeparatorComponent={() => <Separator />}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <StorieCard onPress={() => openModal(item)} item={item} />
        )}
      />

      <Modal visible={modalVisible}>
        <LinearGradient colors={["#09203f", "#304352"]} style={{ flex: 1 }}>
          <Header>
            <Image source={mock?.icon} />
            <Title>{mock?.title}</Title>

            <CloseButton onPress={closeModal}>
              <Feather name="x" size={24} color="white" />
            </CloseButton>
          </Header>

          <StoriesImage source={{ uri: dogData[0]?.url }} resizeMode="cover" />
        </LinearGradient>
      </Modal>
    </Container>
  );
}
