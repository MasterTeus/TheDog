import React from "react";
import { useRef } from "react";

import { Feather } from "@expo/vector-icons";
import {
  Container,
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
import { CatergoriesBreeds } from "../CatergoriesBreeds";

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

      <CatergoriesBreeds />
    </Container>
  );
}
