import React from "react";
import { globalStyles } from "../styles/globalStyles";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}> Home </Text>
    </View>
  );
}
