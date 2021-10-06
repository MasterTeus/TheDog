import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Shadow } from "react-native-neomorph-shadows";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Image,
  Name,
  Paper,
  Temperament,
  MoreInfo,
  Heat,
  Country,
  InfoText,
  Icon,
  IconContainer
} from "./styles";
import { BreedContext } from "../../context/breed";

export function BreedCard({ data }) {
  const navigation = useNavigation();

  const { changeBreed } = useContext(BreedContext);

  function changeCard() {
    navigation.navigate("AboutBreed");
    changeBreed(data);
  }

  return (
    <Container activeOpacity={0.9} onPress={changeCard}>
      <Image
        source={{ uri: data?.image?.url }}
        resizeMode="cover"
        resizeMethod="resize"
      />
      <Name numberOfLines={1}>{data.name}</Name>
      <MoreInfo>
        {data.life_span && (
          <Heat>
            <IconContainer>
              <Icon name="heart" size={12} color="#FF0844" />
            </IconContainer>
            <InfoText>{data?.life_span}</InfoText>
          </Heat>
        )}
        {data.country_code && (
          <Country>
            <IconContainer style={{ backgroundColor: "#00C6FB20" }}>
              <Icon name="map-pin" size={12} color="#005BEA" />
            </IconContainer>
            <InfoText>{data?.country_code}</InfoText>
          </Country>
        )}
      </MoreInfo>
    </Container>
  );
}
