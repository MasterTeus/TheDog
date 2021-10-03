import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Separator = styled.View`
  height: 16px;
`;
export const Container = styled.TouchableOpacity`
  flex-direction: column;
  border-radius: 15px;
  padding: 4px;

  width: 48%;
  background-color: #fff;

  elevation: 1;
`;
export const Image = styled.Image`
  background-color: #fff;
  border-radius: 10px;
  height: 80px;
  width: 100%;
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
export const Icon = styled(Feather)`
  background-color: #FF084420;
  padding: 5px;
  border-radius: 20px;
`;
