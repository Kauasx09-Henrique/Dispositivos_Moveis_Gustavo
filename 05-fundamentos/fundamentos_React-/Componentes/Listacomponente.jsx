

import React from "react";
import { Text, View } from "react-native";

export default function ListaComponente() {
  const carros = ["Ferrari", "BMW", "Tesla", "Mercedes"];

  return (
    <View>
      {carros.map((carro, index) => (
        <Text key={index}>{carro}</Text>
      ))}
    </View>
  );
}
