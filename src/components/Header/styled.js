import styled from "styled-components/native";

export const Container = styled.View`
  padding: 16px;

  /* height: 220px; */
  width: 100%;
  background-color: black;
`;

export const WelcomeSection = styled.View`
  flex-direction: row;
  align-items: center;

  border-bottom-width: 2px;
  padding-bottom: 16px;
  border-bottom-color: #ffffff40;
`;

export const Logo = styled.Image`
  width: 32px;
  height: 32px;
`;

export const WelcomeTextsSection = styled.View`
  margin-left: 8px;
  flex-direction: column;
`;
export const AppName = styled.Text`
  color: #fff;
  font-weight: bold;
`;
export const WellcomeMessage = styled.Text`
  color: #fff;
  opacity: 0.8;
`;

export const Search = styled.TouchableOpacity`
  margin-top: 16px;
  background-color: #ffffff20;
  padding: 8px;

  flex-direction: row;
  border-radius: 12px;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  padding: 0px;
  margin-left: 8px;
  color: #fff;
`;

export const CatergoriesBreeds = styled.View`
  margin-top: 16px;
`;
export const Separator = styled.View`
  width: 16px;
`;
