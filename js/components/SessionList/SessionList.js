import React from "react";
import { View, Text, SectionList } from "react-native";
import moment from "moment";
import SessionListItem from "../SessionListItem";
import styles from "./styles";
import PropTypes from "prop-types";
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
SessionList.propTypes = {
  sessions: PropTypes.array.isRequired,
  faveIds: PropTypes.array.isRequired
};
export default SessionList;