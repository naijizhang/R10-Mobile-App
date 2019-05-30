import React from "react";
import { Platform, StyleSheet, View, TouchableOpacity } from "react-native";
import { Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
const GradientHeader = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden" }}>
    <LinearGradient
      colors={["#cf392a", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 64, width: "100%" }]}
    />
    <Header {...props} />
  </View>
);
export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: "transparent"
  },
  headerTintColor: "#ffffff",
  headerTitleStyle: { color: "#ffffff", fontFamily: "Montserrat" },
  headerLeft: Platform.OS === "android"&& navigation.state.routeName!=="Session" && (
    <TouchableOpacity
      title="Menu"
      onPress={() => {
        navigation.toggleDrawer();
      }}
    >
      <Ionicons
        name="md-menu"
        size={25}
        color={"#fff"}
        style={{ marginLeft: 15 }}
      />
    </TouchableOpacity>
  )
});
