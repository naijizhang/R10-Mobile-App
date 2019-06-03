import React from "react";
import { ActivityIndicator, View } from "react-native";
import styles from "./styles"
const Loader = ({ loading }) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator animating={true} size="large" color="red" />
      ) : null}
    </View>
  );
};
export default Loader;
