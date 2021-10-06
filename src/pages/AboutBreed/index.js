import React, { useEffect, useState } from "react";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { BreedContext } from "../../context/breed";
import { api } from "../../services/api";
import {
  Container,
  ButtonAction,
  ButtonBack,
  ImageCurrent,
  Gradient,
  DotContainer,
  ImageDot,
  Name,
  BottomInfos,
  OriginContainer,
  Origin,
  ContainerInformation,
  ContentCard,
  Card,
  ContentIcon,
  InfoContent,
  Value,
  Title
} from "./styles";

export function AboutBreed({ navigation }) {
  const { selectedBreed } = useContext(BreedContext);
  const [images, setImages] = useState([]);
  const [imageSelected, setImageSelected] = useState(selectedBreed?.image?.url);

  async function getMoreInfoBreed() {
    const { data } = await api.get(
      `/images/search?limit=3&breed_id=${selectedBreed.id}&size=med`
    );

    setImages(data);
    if (!selectedBreed.image) {
      setImageSelected(data[0]?.url);
    }
  }
  useEffect(() => {
    getMoreInfoBreed();
  }, []);

  return (
    <Container>
      <ImageCurrent resizeMode="cover" source={{ uri: imageSelected }}>
        <ButtonBack onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={32} color="#fff" />
        </ButtonBack>
        <Gradient colors={["transparent", "rgba(0,0,0,0.8)"]} />
        <DotContainer>
          {images.map((item) => (
            <ButtonAction
              key={item.id}
              onPress={() => setImageSelected(item.url)}
            >
              <ImageDot borderRadius={5} source={{ uri: item.url }} />
            </ButtonAction>
          ))}
        </DotContainer>

        <BottomInfos>
          <Name>{selectedBreed?.name}</Name>
          {selectedBreed.temperament && (
            <OriginContainer>
              <Foundation name="guide-dog" size={24} color="#ffffff80" />
              <Origin numberOfLines={2}>{selectedBreed?.temperament}</Origin>
            </OriginContainer>
          )}
        </BottomInfos>
      </ImageCurrent>

      <ContainerInformation>
        <ContentCard>
          <Card>
            <ContentIcon style={{ backgroundColor: "#F6416C20" }}>
              <FontAwesome name="heartbeat" size={32} color="#F6416C" />
            </ContentIcon>
            <InfoContent>
              <Title>Idade</Title>
              <Value>{selectedBreed?.life_span || "Indefinido"}</Value>
            </InfoContent>
          </Card>

          <Card>
            <ContentIcon style={{ backgroundColor: "#FCCF3129" }}>
              <MaterialIcons name="height" size={32} color="orange" />
            </ContentIcon>
            <InfoContent>
              <Title>Tamanho</Title>
              <Value>
                {selectedBreed?.height?.imperial || "Indefinido"} cm
              </Value>
            </InfoContent>
          </Card>

          <Card>
            <ContentIcon style={{ backgroundColor: "#F761A120" }}>
              <FontAwesome5 name="weight" size={32} color="#8C1BAB" />
            </ContentIcon>
            <InfoContent>
              <Title>Peso</Title>
              <Value>
                {selectedBreed?.weight?.imperial || "Indefinido"} kg
              </Value>
            </InfoContent>
          </Card>

          <Card>
            <ContentIcon style={{ backgroundColor: "#49C62820" }}>
              <MaterialIcons name="family-restroom" size={32} color="#49C628" />
            </ContentIcon>
            <InfoContent>
              <Title>Indicado para</Title>
              <Value>{selectedBreed?.bred_for || "Indefinido"}</Value>
            </InfoContent>
          </Card>

          <Card>
            <ContentIcon style={{ backgroundColor: "#00EAFF20" }}>
              <Feather name="map-pin" size={32} color="#00EAFF" />
            </ContentIcon>
            <InfoContent>
              <Title>Origem</Title>
              <Value>{selectedBreed?.country_code || "Indefinido"}</Value>
            </InfoContent>
          </Card>
          <Card>
            <ContentIcon style={{ backgroundColor: "#EE9AE520" }}>
              <MaterialCommunityIcons name="dog" size={32} color="#EE9AE5" />
            </ContentIcon>
            <InfoContent>
              <Title>Grupo</Title>
              <Value>{selectedBreed?.breed_group || "Indefinido"}</Value>
            </InfoContent>
          </Card>
        </ContentCard>
      </ContainerInformation>
    </Container>
  );
}

const icon = {
  backgroundColor: "#fff",
  borderRadius: 18,
  maxHeight: 60,
  padding: 10,
  justifyContent: "center",
  alignItems: "center",
  marginRight: 12
};
