import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import MapView from "react-native-maps";

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 49.263397,
          longitude: -123.138267,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }}
      >
        <MapView.Marker
          coordinate={{ latitude: 49.263397, longitude: -123.138267 }}
          title={"R10"}
          description={"R10 App"}
        >
          <Image
            source={require("../../assets/images/map_pin.png")}
            style={{ width: 50, resizeMode: "contain" }}
          />
        </MapView.Marker>
      </MapView>
    </View>
  );
};
export default Map;
