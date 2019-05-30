//import liraries
import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { withNavigation } from "react-navigation";
// create a component
const SessionListItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Session", { item })}>
      <View>
      <View>
        <Text>{item.title}</Text>
        <Text>{item.location}</Text>
        </View>
        {/* <Image
            style={{ width: 50, height: 50 }}
            source={{ uri:  }}
          /> */}
      </View>
    </TouchableOpacity>
  );
};

//make this component available to the app
export default withNavigation(SessionListItem);
