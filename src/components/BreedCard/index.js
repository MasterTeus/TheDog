import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Shadow } from "react-native-neomorph-shadows";

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
  Icon
} from "./styles";

export function BreedCard({ data }) {
  return (
    <Container activeOpacity={0.9}>
      <Image
        source={{ uri: data?.image?.url }}
        resizeMode="cover"
        resizeMethod="resize"
      />
      <Name numberOfLines={1}>{data.name}</Name>
      <MoreInfo>
        {data.life_span && (
          <Heat>
            <Icon name="heart" size={12} color="#FF0844" />
            <InfoText>{data?.life_span}</InfoText>
          </Heat>
        )}
        {data.country_code && (
          <Country>
            <Icon style={{backgroundColor: '#00C6FB20'}} name="map-pin" size={12} color="#005BEA" />
            <InfoText>{data?.country_code}</InfoText>
          </Country>
        )}
      </MoreInfo>
    </Container>
  );
}
