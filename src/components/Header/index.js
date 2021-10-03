import React from "react";
import { useRef } from "react";
import { View } from "react-native";

import { Feather } from "@expo/vector-icons";
import {
  Container,
  TrailRight,
  TrailLeft,
  WelcomeSection,
  Logo,
  AppName,
  WellcomeMessage,
  WelcomeTextsSection,
  Search,
  InputSearch
} from "./styled";

//assets
import logo from "../../assets/white-logo.png";
import { StoriesList } from "../StoriesList";
import trail from "../../assets/trail.png";

export function Header() {
  const inputRef = useRef(null);

  return (
    <Container
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      colors={["#29323C", "#485563"]}
    >
      <TrailRight source={trail} />
      <TrailLeft source={trail} />
      <View>
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

        <StoriesList />
      </View>
    </Container>
  );
}
