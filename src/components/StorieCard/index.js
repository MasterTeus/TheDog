import React from "react";

import { Container, ContentIcon, IconBreed, Title } from "./styled";

export function StorieCard({ item, onPress }) {
  return (
    <Container onPress={onPress}>
      <ContentIcon>
        <IconBreed resizeMode="contain" source={item.icon} />
      </ContentIcon>
      <Title>{item.title}</Title>
    </Container>
  );
}
