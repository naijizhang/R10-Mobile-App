//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import moment from "moment";
import { withNavigation } from "react-navigation";
// create a component
const SessionList = ({ sessions,navigation }) => {
  console.log("Section list:", sessions);
  return (
    <View style={styles.container}>
      <SectionList
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: "bold" }}>
            {moment(title).format("LT")}
          </Text>
        )}
        renderItem={({ item, index, section }) => (
          <TouchableHighlight  onPress={() => navigation.navigate('Session')}>
            <Text key={index.toString()}>{item.title}</Text>
          </TouchableHighlight>
        )}
        sections={sessions}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  }
});

//make this component available to the app
export default withNavigation(SessionList);
