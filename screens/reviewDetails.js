import React from "react";
import { globalStyles } from "../styles/globalStyles";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ReviewDetails({ navigation }) {
  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text> Review Details </Text>
      <Button title="back to home" onPress={handlePress} />
    </View>
  );
}
