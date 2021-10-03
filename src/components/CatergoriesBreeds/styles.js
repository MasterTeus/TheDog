import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 16px;
`;
export const Separator = styled.View`
  width: 16px;
`;

export const Header = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.Image`
  width: 48px;
  height: 48px;

  background-color: #fff;
  border-radius: 16px;
  border-width: 2px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const CloseButton = styled.TouchableOpacity``;

export const StoriesImage = styled.Image`
  min-width: 100%;
  height: 80%;
  max-height: 600px;
  background-color: #ffffff20;
  border-radius: 15px;
`;
