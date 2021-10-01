import React from "react";

import { Container, ContentIcon, IconBreed, Title } from "./styled";

export default function CategorieCard({ item }) {
  return (
    <Container>
      <ContentIcon>
        <IconBreed source={item.icon} />
      </ContentIcon>
      <Title>{item.title}</Title>
    </Container>
  );
}
