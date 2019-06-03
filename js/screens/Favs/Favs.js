import React from "react";
import { View, StyleSheet } from "react-native";
import SessionList from "../../components/SessionList";
import PropTypes from "prop-types";
const Favs = ({ sessions, faveIds }) => {
  return (
    <View style={styles.container}>
      <SessionList sessions={sessions} faveIds={faveIds} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  }
});
Favs.propTypes = {
  sessions: PropTypes.array.isRequired,
  faveIds: PropTypes.array.isRequired
};

export default Favs;
