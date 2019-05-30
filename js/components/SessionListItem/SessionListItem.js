//import liraries
import React, { Component } from "react";
import { Platform, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { withNavigation } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
// create a component
const SessionListItem = ({ item, navigation, isFave }) => {
  const heartIconName = Platform.select({
    ios: "ios-heart",
    android: "md-heart"
  });
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Session", { item })}>
      <View>
        <View>
          <Text>{item.title}</Text>
          <Text>{item.location}</Text>
        </View>
        {isFave ? (
          <Ionicons name={heartIconName} size={25} color={"red"} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

//make this component available to the app
export default withNavigation(SessionListItem);
