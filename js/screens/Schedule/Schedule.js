import React, { Component } from "react";
import { View } from "react-native";
import SessionList from "../../components/SessionList";
import styles from "./styles";

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
export default Schedule;
