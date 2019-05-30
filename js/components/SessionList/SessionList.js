//import liraries
import React, { Component } from "react";
import { View, Text, SectionList } from "react-native";
import moment from "moment";
import SessionListItem from "../SessionListItem";
import styles from "./styles";
// create a component
const SessionList = ({ sessions, faveIds }) => {
  return (
    <View style={styles.container}>
      <SectionList
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.time}>{moment(title).format("LT")}</Text>
        )}
        renderItem={({ item, index, section }) => (
          <SessionListItem
            item={item}
            key={index}
            isFave={faveIds.includes(item.id)}
          />
        )}
        sections={sessions}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

//make this component available to the app
export default SessionList;
