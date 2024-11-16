import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import Background from "./src/components/atoms/Background";

export default function App() {
  return (
    <Background>
      <Text style={{ color: "#fff", fontSize: 24, textAlign: "center" }}>
        Bem-vindo ao Bellissare App!
      </Text>
      <StatusBar style="light" />
    </Background>
  );
}
