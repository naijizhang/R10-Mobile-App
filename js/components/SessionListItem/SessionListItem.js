import React from "react";
import { Platform, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { withNavigation } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
const SessionListItem = ({ item, navigation, isFave }) => {
  const heartIconName = Platform.select({
    ios: "ios-heart",
    android: "md-heart"
  });
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Session", { item })}>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.locationAndHeart}>
          <Text style={styles.location}>{item.location}</Text>
          <View>
            {isFave ? (
              <Ionicons
                style={styles.heartIcon}
                name={heartIconName}
                size={18}
              />
            ) : null}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
SessionListItem.propTypes = {
  item: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  isFave: PropTypes.bool.isRequired
};
export default withNavigation(SessionListItem);
