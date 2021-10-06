import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { HEIGHT, WIDTH } from "../../helpers/dimentions";

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ButtonAction = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;
export const ButtonBack = styled(ButtonAction)`
  background-color: #00000080;
  width: 50px;
  height: 50px;
  left: 10px;
  top: 10px;

  border-radius: 25px;
`;

export const ImageCurrent = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
  width: ${WIDTH * 0.95}px;
  height: ${HEIGHT * 0.6}px;
  left: 2.5%;
  margin-top: 2.5%;
  border-radius: 20px;

  max-height: 400px;

  overflow: hidden;
`;
export const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 40%;
  bottom: 0px;
  border-radius: 20px;
  position: absolute;
`;

export const ImageDot = styled.ImageBackground`
  width: 60px;
  height: 60px;
  border-radius: 10px;

  border-color: #ffffff40;
  border-width: 4px;
`;
export const DotContainer = styled.View`
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 99;
`;

export const BreedFastInfo = styled.View`
  width: 80%;
  height: 120px;
  border-radius: 20px;
  top: -60px;
`;

export const BottomInfos = styled.View`
  left: 12px;
  bottom: 24px;
`;
export const Name = styled.Text`
  color: #fff;
  width: 80%;
  font-weight: bold;
  font-size: 24px;
`;
export const OriginContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Origin = styled.Text`
  width: 70%;
  color: #ffffff80;
  margin-left: 9px;
  font-size: 16px;
`;
export const ContainerInformation = styled.View`
  padding: 16px;
`;
export const InfoContent = styled.View`
  max-width: 80%;
  left: 12px;
`;
export const ContentCard = styled.View`
  flex-direction: column;
  justify-content: space-between;
  margin: 12px;
`;
export const ContentIcon = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 60px;
  width: 60px;

  border-radius: 20px;
`;
export const Card = styled.View`
  /* width: ${WIDTH * 0.4}px; */
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Value = styled.Text`
  font-weight: bold;
  font-size: 18px;

  margin-top: 4px;
`;
export const Title = styled.Text`
  color: #00000060;
`;
