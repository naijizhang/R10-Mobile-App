//import liraries
import React, { Component } from "react";
import {
  Platform,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import moment from "moment";
import { withNavigation } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
const Session = ({ item, navigation, faveIds, addFave, removeFave }) => {
  const heartIconName = Platform.select({
    ios: "ios-heart",
    android: "md-heart"
  });
  return (
    <ScrollView style={styles.container}>
      <View style={styles.locationAndHeart}>
        <Text style={styles.location}>{item.location}</Text>
        <View>
          {faveIds.includes(item.id) ? (
            <Ionicons style={styles.heartIcon} name={heartIconName} size={25} />
          ) : null}
        </View>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.time}>{moment(item.startTime).format("LT")}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.presenredBy}>Presented by:</Text>
      <TouchableOpacity
        style={styles.speakerContainer}
        onPress={() =>
          navigation.navigate("Speaker", {
            speaker: item.speaker
          })
        }
      >
        <Image
          style={styles.profileImage}
          source={{ uri: item.speaker.image }}
        />
        <Text style={styles.name}>{item.speaker.name}</Text>
      </TouchableOpacity>
      <View style={styles.seperater} />
      {faveIds.includes(item.id) ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => removeFave(item.id)}
        >
          <LinearGradient
            colors={["#9963ea","#4583e8"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={[StyleSheet.absoluteFill, { height: 50, width: "100%" }]}
          />
          <Text style={styles.buttonText}>Remove from Favs</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => addFave(item.id)}
        >
          <LinearGradient
            colors={["#9963ea","#4583e8"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={[StyleSheet.absoluteFill, { height: 50, width: "100%" }]}
          />
          <Text style={styles.buttonText}>Add from Favs</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};
export default withNavigation(Session);
