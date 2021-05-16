import React from "react";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from "react-native";

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.drawerLogoContainer}>
      <Image
        source={require("../assets/heart_logo.png")}
        style={styles.drawerLogo}
      />
      <Text>Menu</Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  drawerLogoContainer: {
    height: 100,
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerLogo: {
    height: 60,
    width: 60,
  },
});

const RootDrawerNavigation = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    About: {
      screen: AboutStack,
    },
  },
  {
    contentComponent: CustomDrawerComponent,
  }
);

export default createAppContainer(RootDrawerNavigation);
