import React from "react";
import { View, Text, Platform, Image, StyleSheet, Linking } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { withNavigation } from "react-navigation";
const Speaker = ({ speaker, navigation }) => {
  const closeIconName = Platform.select({
    ios: "ios-close",
    android: "md-close"
  });
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          style={styles.closeIcon}
          name={closeIconName}
          size={35}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.header}>About the Speaker</Text>
      </View>
      <ScrollView style={styles.whiteBoard}>
        <Image style={styles.profilePicture} source={{ uri: speaker.image }} />
        <Text style={styles.name}>{speaker.name}</Text>
        <Text style={styles.bio}>{speaker.bio}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Linking.openURL(speaker.url);
          }}
        >
          <LinearGradient
            colors={["#9963ea", "#4583e8"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={[StyleSheet.absoluteFill, { height: 50, width: "100%" }]}
          />
          <Text style={styles.buttonText}>Read More on Wikipedia</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default withNavigation(Speaker);
