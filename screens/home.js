import React from "react";
import { globalStyles } from "../styles/globalStyles";
import { Button, Text, View } from "react-native";

export default function Home({ navigation }) {
  const handlePress = () => {
    navigation.navigate("ReviewDetails");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}> Home </Text>
      <Button title="go to review dets" onPress={handlePress} />
    </View>
  );
}
