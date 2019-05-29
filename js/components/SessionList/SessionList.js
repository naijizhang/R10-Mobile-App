//import liraries
import React, { Component } from "react";
import { View, Text, SectionList, TouchableHighlight } from "react-native";
import moment from "moment";
import { withNavigation } from "react-navigation";
import styles from "./styles";
// create a component
const SessionList = ({ sessions, navigation }) => {
  console.log("Section list:", sessions);
  return (
    <View style={styles.container}>
      <SectionList
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.time}>
            {moment(title).format("LT")}
          </Text>
        )}
        renderItem={({ item, index, section }) => (
          <TouchableHighlight
            key={index}
            onPress={() => navigation.navigate("Session", { item: item })}
          >
            <View>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
            </View>
          </TouchableHighlight>
        )}
        sections={sessions}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

//make this component available to the app
export default withNavigation(SessionList);
