import React from "react";
import { useRef } from "react";
import { Fragment } from "react";
import { View, Text, TextInput, FlatList } from "react-native";

import { Feather } from "@expo/vector-icons";
import {
  Container,
  WelcomeSection,
  Logo,
  AppName,
  WellcomeMessage,
  WelcomeTextsSection,
  Search,
  InputSearch,
  CatergoriesBreeds,
  Separator
} from "./styled";

//assets
import logo from "../../assets/white-logo.png";
import { categories } from "../../helpers/mock";
import CategorieCard from "../CategorieCard";

export function Header() {
  const inputRef = useRef(null);

  return (
    <Container>
      <WelcomeSection>
        <Logo resizeMode="contain" source={logo} />
        <WelcomeTextsSection>
          <AppName>The Dog</AppName>
          <WellcomeMessage>Bem-vindo de volta</WellcomeMessage>
        </WelcomeTextsSection>
      </WelcomeSection>

      <Search onPress={() => inputRef.current.focus()} activeOpacity={1}>
        <Feather name="search" size={24} color="#ffffff40" />
        <InputSearch
          placeholder="Husky Siberiano"
          placeholderTextColor="#ffffff40"
          ref={inputRef}
        />
      </Search>

      <CatergoriesBreeds>
        <FlatList
          data={categories}
          horizontal
          keyExtractor={() => String(Math.random())}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => <CategorieCard item={item} />}
        />
      </CatergoriesBreeds>
    </Container>
  );
}
