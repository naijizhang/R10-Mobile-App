//import liraries
import React, { Component } from "react";
import Favs from "./Favs";
import FavesContext from "../../context/FavesContext";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../../components/Loader";
import formatSessionData from "../../helpers";
// create a component
class FavsContainer extends Component {
  static navigationOptions = {
    title: "Favs"
  };
  render() {
    return (
      <FavesContext.Consumer>
        {value => {
          return (
            <Query
              variables={{ faveIds: value.faveIds }}
              query={GET_FAVE_SESSIONS}
            >
              {({ loading, data }) => {
                if (loading || !data) return <Loader loading={loading} />;
                console.log(data);
                return (
                  <Favs
                    faveIds={value.faveIds}
                    sessions={formatSessionData(data.allSessions)}
                  />
                );
              }}
            </Query>
          );
        }}
      </FavesContext.Consumer>
    );
  }
}
const GET_FAVE_SESSIONS = gql`
  query allFaveSessions($faveIds: [ID!]) {
    allSessions(filter: { id_in: $faveIds }) {
      id
      title
      description
      location
      speaker {
        id
      }
      startTime
    }
  }
`;
export default FavsContainer;
