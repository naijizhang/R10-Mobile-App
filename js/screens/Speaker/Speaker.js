//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button, Linking } from "react-native";

// create a component
const Speaker = ({ speaker }) => {
  return (
    <View>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: speaker.image }}
      />
      <Text>{speaker.name}</Text>
      <Text>{speaker.bio}</Text>
      <Button
        onPress={() => {
          Linking.openURL(speaker.url);
        }}
        title="Read More on Wikipedia"
        color="#841584"
        accessibilityLabel="Read More on Wikipedia Button"
      />
    </View>
  );
};

//make this component available to the app
export default Speaker;
