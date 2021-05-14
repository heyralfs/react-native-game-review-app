import React from "react";
import { globalStyles } from "../styles/globalStyles";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text> {navigation.getParam("title")} </Text>
      <Text> {navigation.getParam("body")} </Text>
      <Text> {navigation.getParam("rating")} </Text>
    </View>
  );
}
