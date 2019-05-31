import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import styles from "./styles";
import ConductItem from "../../components/ConductItem";
const About = ({ conductItems }) => {
  return (
    <ScrollView>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/r10_logo.png")}
        />
      </View>
      <View style={styles.seperater} />
      <Text style={styles.paragraph}>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={styles.title}>Date & Venue</Text>
      <Text style={styles.paragraph}>
        The R10 conference will take place on Tuesday, June 27, 2017 in
        Vancouver, BC
      </Text>
      <Text style={styles.title}>Code of Conduct</Text>
      {conductItems &&
        conductItems.allConducts.map(item => {
          return <ConductItem item={item} key={item.id} />;
        })}
    </ScrollView>
  );
};
export default About;
