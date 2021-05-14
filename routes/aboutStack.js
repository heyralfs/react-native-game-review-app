import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: "About GameZone",
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#ff7700",
      height: 80,
    },
  },
});

export default AboutStack;
