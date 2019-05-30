//import liraries
import React, { Component } from "react";
import {
  Platform,
  View,
  Text,
  ScrollView,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import moment from "moment";
import { withNavigation } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
// create a component
const Session = ({ item, navigation, faveIds, addFave, removeFave }) => {
  console.log("item", item);
  console.log("favids", faveIds);
  console.log("removeFave", removeFave);
  const heartIconName = Platform.select({
    ios: "ios-heart",
    android: "md-heart"
  });
  return (
    <ScrollView>
      <View>
        <Text>{item.location}</Text>
        {faveIds.includes(item.id) ? (
          <Ionicons name={heartIconName} size={25} color={"red"} />
        ) : null}
      </View>
      <Text>{item.title}</Text>
      <Text>{moment(item.startTime).format("LT")}</Text>
      <Text>{item.description}</Text>
      <Text>Presented by:</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Speaker", {
            speaker: item.speaker
          })
        }
      >
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: item.speaker.image }}
          />
          <Text>{item.speaker.name}</Text>
        </View>
      </TouchableOpacity>
      {faveIds.includes(item.id) ? (
        <TouchableOpacity onPress={() => removeFave(item.id)}>
          <Text>Remove from Favs</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => addFave(item.id)}>
          <Text>Add from Favs</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

//make this component available to the app
export default withNavigation(Session);
