import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Separator = styled.View`
  height: 16px;
`;
export const Container = styled.TouchableOpacity`
  flex-direction: column;
  border-radius: 25px;
  padding: 6px;
  padding-bottom: 16px;

  width: 48%;
  background-color: #fff;

  elevation: 1;
`;
export const Image = styled.Image`
  background-color: #fff;
  border-radius: 20px;
  height: 160px;
  width: 100%;
  background-color: #d1d1d140;
  margin-bottom: 12px;
`;

export const Name = styled.Text`
  color: #29323c;

  font-weight: bold;
`;
export const Temperament = styled.Text`
  color: #00000060;
`;
export const MoreInfo = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;
export const Heat = styled.View`
  align-items: center;
  flex-direction: row;
`;
export const Country = styled.View`
  align-items: center;
  margin-left: 12px;
  flex-direction: row;
`;
export const InfoText = styled.Text`
  left: 4px;
  font-size: 10px;
`;
export const Icon = styled(Feather)``;
export const IconContainer = styled.View`
  background-color: #ff084420;
  padding: 5px;
  border-radius: 20px;
`;
