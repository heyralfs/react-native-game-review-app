import React from "react";
import { globalStyles } from "../styles/globalStyles";
import { Image, StyleSheet, Text, View } from "react-native";
import Card from "../shared/card";

export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={styles.reviewTitle}> {navigation.getParam("title")} </Text>
        <Text style={styles.reviewBody}> {navigation.getParam("body")} </Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <View style={styles.hearts} key={navigation.getParam("rating")}>
            {Array(navigation.getParam("rating"))
              .fill()
              .map((item, index) => (
                <Image source={require("../assets/rating-1.png")} key={index} />
              ))}
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  reviewTitle: {
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 8,
    fontSize: 16,
  },
  reviewBody: {
    marginVertical: 8,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#2E8B57",
  },
  hearts: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
