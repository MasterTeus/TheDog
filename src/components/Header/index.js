import React, { useState, useEffect, useContext } from "react";
import { useRef } from "react";
import { Text, View, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
import {
  Container,
  PetImage,
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
import { BreedContext } from "../../context/breed";

//assets
import logo from "../../assets/white-logo.png";
import dog from "../../assets/dog-no-background.png";
import { api } from "../../services/api";
import { LinearGradient } from "expo-linear-gradient";
import { searchBreed } from "../../services/connection";

export function Header() {
  const navigation = useNavigation();
  const { changeBreed } = useContext(BreedContext);
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  async function ChangeText(e) {
    setValue(e);
    const breedResult = await searchBreed(e);

    setResults(breedResult);
  }

  function changeCard(data) {
    navigation.navigate("AboutBreed");
    changeBreed(data);
  }
  const ResultCard = ({ data }) => (
    <ResultButton onPress={() => changeCard(data)} activeOpacity={1}>
      <ResultText>{data.name}</ResultText>
    </ResultButton>
  );

  function cleanInput() {
    setValue("");
    Keyboard.dismiss();
  }

  return (
    <Container>
      <LinearGradient
        style={gradient}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={["#cc208e", "#ff0844"]}
      >
        <PetImage resizeMode="contain" source={dog} />
        <View>
          <WelcomeSection>
            <Logo resizeMode="contain" source={logo} />
            <WelcomeTextsSection>
              <AppName>The Dog</AppName>
              <WellcomeMessage>Bem-vindo de volta</WellcomeMessage>
            </WelcomeTextsSection>
          </WelcomeSection>

          <Search onPress={() => inputRef.current.focus()} activeOpacity={1}>
            <Feather name="search" size={24} color="#000" />
            <InputSearch
              placeholder="Husky Siberiano"
              placeholderTextColor="#000"
              ref={inputRef}
              value={value}
              onChangeText={ChangeText}
            />
            {!!value.length && (
              <ClearInput onPress={cleanInput}>
                <Feather name="x" size={24} color="#000" />
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
        </View>
        {/* <StoriesList /> */}
      </LinearGradient>
    </Container>
  );
}

const gradient = {
  padding: 16,
  flex: 1
};
