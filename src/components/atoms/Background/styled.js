import styled from "styled-components/native";
import { ImageBackground } from "react-native";
const Container = styled.View`
  flex: 1;
  background-color: #010000;
`;

const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  resize-mode: cover;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
`;
