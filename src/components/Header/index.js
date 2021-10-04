import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { Text, View, Keyboard } from "react-native";

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
  InputSearch,
  ResultsSearch,
  ResultText,
  ResultButton,
  ClearInput
} from "./styled";

//assets
import logo from "../../assets/white-logo.png";
import { StoriesList } from "../StoriesList";
import trail from "../../assets/trail.png";
import { api } from "../../services/api";

export function Header() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  async function ChangeText(e) {
    setValue(e);
    const { data } = await api.get(
      `https://api.thedogapi.com/v1/breeds/search?q=${e}`
    );
    setResults(data);
  }

  const ResultCard = ({ data }) => (
    <ResultButton>
      <ResultText>{data.name}</ResultText>
    </ResultButton>
  );

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => console.log("open")
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide"
      // keyBoardHiden
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  function cleanInput() {
    setValue("");
    Keyboard.dismiss();
  }

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
            value={value}
            onChangeText={ChangeText}
          />
          {!!value.length && (
            <ClearInput onPress={cleanInput}>
              <Feather name="x" size={24} color="#ffffff" />
            </ClearInput>
          )}
        </Search>
        {!!value.length && (
          <ResultsSearch
            contentContainerStyle={{ padding: 10 }}
            data={results}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <ResultCard data={item} />}
          />
        )}

        <StoriesList />
      </View>
    </Container>
  );
}
