import React from "react";
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
      <Image source={{ uri: data?.image?.url }} />
      <Paper>
        <Name>{data.name}</Name>
        <Temperament numberOfLines={1}>{data?.temperament}</Temperament>
        <MoreInfo>
          {data.life_span && (
            <Heat>
              <Icon name="heart" size={18} color="#306060" />
              <InfoText>{data?.life_span}</InfoText>
            </Heat>
          )}
          {data.country_code && (
            <Country>
              <Icon name="map-pin" size={18} color="#306060" />
              <InfoText>{data?.country_code}</InfoText>
            </Country>
          )}
        </MoreInfo>
      </Paper>
    </Container>
  );
}
