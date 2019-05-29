//import liraries
import React, { Component } from "react";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../../components/Loader";
import formatSessionData from "../../helpers"
// create a component
class ScheduleContainer extends Component {
  render() {
    return ( <Query query={GET_SESSIONS}>
        {({ loading, data }) => {
          if (loading || !data) return <Loader loading={loading} />;
          console.log(data);
          return <Schedule sessions={formatSessionData(data.allSessions)}/>;
        }}
      </Query>);
  }
}
const GET_SESSIONS = gql`
  query {
    allSessions(orderBy: title_ASC) {
      id
      title
      description
      location
      speaker {
        id
        name
      }
      startTime
    }
  }
`;
//make this component available to the app
export default ScheduleContainer;
