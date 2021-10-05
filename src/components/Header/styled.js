import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient)`
  padding: 16px;
  position: relative;
  margin-bottom: 16px;

  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  z-index: 999;
`;

export const TrailRight = styled.ImageBackground`
  width: 100%;
  height: 100%;

  position: absolute;
  right: -80px;
  top: -100px;
`;
export const TrailLeft = styled.ImageBackground`
  width: 120%;
  height: 120%;
  position: absolute;

  left: -200px;
  bottom: -90px;

  opacity: 0.4;
  transform: rotateZ(70deg);
`;

export const WelcomeSection = styled.View`
  flex-direction: row;
  align-items: center;

  border-bottom-width: 2px;
  padding-bottom: 16px;
  border-bottom-color: #ffffff20;
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

  z-index: 999;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  padding: 0px;
  margin-left: 8px;
  color: #fff;
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
