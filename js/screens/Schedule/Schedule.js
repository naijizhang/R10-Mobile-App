import React from "react";
import { View } from "react-native";
import SessionList from "../../components/SessionList";
import styles from "./styles";
import PropTypes from "prop-types";
const Schedule = ({ sessions, faveIds }) => {
  return (
    <View style={styles.container}>
      <SessionList sessions={sessions} faveIds={faveIds} />
    </View>
  );
};

Schedule.propTypes = {
  sessions: PropTypes.array.isRequired,
  faveIds: PropTypes.array.isRequired
};
export default Schedule;
