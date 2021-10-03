import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Separator = styled.View`
  height: 16px;
`;
export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
export const Image = styled.Image`
  background-color: #fff;
  border-radius: 10px;
  width: 130px;
  height: 170px;
`;
export const Paper = styled.View`
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #fff;
  padding: 10px;

  height: 120px;
  width: 65%;

  elevation: 5;
`;
export const Name = styled.Text`
  color: #306060;
  font-size: 18px;
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
  font-weight: bold;
  left: 4px;
`;
export const Icon = styled(Feather)`
  background-color: #158d8d40;
  padding: 5px;
  border-radius: 20px;
`;
