import React, { Component } from "react";
import { Query } from "react-apollo";
import {Text} from "react-native"
import About from "./About";
import gql from "graphql-tag";
class AboutContainer extends Component {
  render() {
    return (
      <Query query={GET_CONDUCT_ITEMS}>
        {({ loading, data }) => {
          if (loading || !data) return <Text>"Loading..."</Text>;
          console.log(data);
          return <About data={data} />;
        }}
      </Query>
    );
  }
}
const GET_CONDUCT_ITEMS = gql`
  query {
    allConducts(orderBy: order_ASC) {
      id
      description
      title
    }
  }
`;
export default AboutContainer;
