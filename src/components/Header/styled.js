import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  margin-bottom: 16px;
  background-color: green;

  min-height: 200px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  z-index: 999;
  overflow: hidden;
`;

export const PetImage = styled.Image`
  height: 260px;
  width: 120px;

  position: absolute;
  right: 20px;
  top: -55px;
`;

export const WelcomeSection = styled.View`
  flex-direction: column;
`;

export const Logo = styled.Image`
  width: 48px;
  height: 48px;
`;

export const WelcomeTextsSection = styled.View`
  margin-top: 8px;
  flex-direction: column;
`;

export const AppName = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 22px;
`;
export const WellcomeMessage = styled.Text`
  color: #fff;
  opacity: 0.8;
`;

export const Search = styled.TouchableOpacity`
  margin-top: 10px;
  background-color: #ffffff;
  padding: 8px;

  flex-direction: row;
  border-radius: 12px;

  z-index: 999;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  padding: 0px;
  margin-left: 8px;
  color: #000;
`;
export const ResultsSearch = styled.FlatList`
  margin-top: 4px;
  width: 100%;
  max-height: 200px;
  min-height: 60px;
  background-color: #fff;
  border-radius: 12px;
`;
export const ResultText = styled.Text`
  font-weight: bold;
  color: #000;
`;
export const ResultButton = styled.TouchableOpacity`
  padding: 10px;
  border-bottom-color: #00000020;
  border-bottom-width: 1px;
`;
export const ClearInput = styled.TouchableOpacity`
  justify-content: center;
`;
