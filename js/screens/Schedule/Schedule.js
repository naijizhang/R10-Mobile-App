//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import SessionList from "../../components/SessionList";

// create a component
class Schedule extends Component {
  render() {
    const { sessions, faveIds } = this.props;
    return (
      <View style={styles.container}>
        <SessionList sessions={sessions} faveIds={faveIds} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  }
});
//make this component available to the app
export default Schedule;
