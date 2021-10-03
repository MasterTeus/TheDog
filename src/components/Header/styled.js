import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient)`
  padding: 16px;
  position: relative;

  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
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

  left: -100px;
  bottom: -90px;

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
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  padding: 0px;
  margin-left: 8px;
  color: #fff;
`;
