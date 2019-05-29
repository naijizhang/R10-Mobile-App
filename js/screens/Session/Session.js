//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  TouchableHighlight
} from "react-native";
import moment from "moment";
import gql from "graphql-tag";
import Loader from "../../components/Loader";
import { Query } from "react-apollo";
import { withNavigation } from "react-navigation";
// create a component
const Session = ({ item, navigation }) => {
  console.log("item", item);
  return (
    <Query
      query={gql`
        query {
          Session(id: "${item.id}") {
            description
            speaker {
              id
              name
              image
              bio
              url
            }
          }
        }
      `}
    >
      {({ loading, data }) => {
        console.log("data", data);
        if (loading || !data) return <Loader loading={loading} />;
        return (
          <ScrollView>
            <Text>{item.location}</Text>
            <Text>{item.title}</Text>
            <Text>{moment(item.startTime).format("LT")}</Text>
            <Text>{data.Session.description}</Text>
            <Text>Presented by:</Text>
            <TouchableHighlight
              onPress={() =>
                navigation.navigate("Speaker", {
                  speaker: data.Session.speaker
                })
              }
            >
              <View>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={{ uri: data.Session.speaker.image }}
                />
                <Text>{data.Session.speaker.name}</Text>
              </View>
            </TouchableHighlight>
            <Button
              //   onPress={onPressLearnMore}
              title="Remove from Favs"
              color="#841584"
              accessibilityLabel="Remove from Favs Button"
            />
          </ScrollView>
        );
      }}
    </Query>
  );
};

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
export default withNavigation(Session);
