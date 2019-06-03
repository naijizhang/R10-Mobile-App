import React, { Component } from "react";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../../components/Loader";
import formatSessionData from "../../helpers";
import FavesContext from "../../context/FavesContext";
class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return (
      <Query query={GET_SESSIONS}>
        {({ loading, data }) => {
          if (loading || !data) return <Loader loading={loading} />;
          return (
            <FavesContext.Consumer>
              {value => (
                <Schedule
                  sessions={formatSessionData(data.allSessions)}
                  faveIds={value.faveIds}
                />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
const GET_SESSIONS = gql`
  query {
    allSessions {
      id
      title
      location
      startTime
    }
  }
`;

export default ScheduleContainer;
