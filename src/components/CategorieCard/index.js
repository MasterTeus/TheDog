import React from "react";

import { Container, ContentIcon, IconBreed, Title } from "./styled";

export default function CategorieCard({ item, onPress }) {
  return (
    <Container onPress={onPress}>
      <ContentIcon>
        <IconBreed resizeMode="contain" source={item.icon} />
      </ContentIcon>
      <Title>{item.title}</Title>
    </Container>
  );
}
