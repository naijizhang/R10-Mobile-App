import React, { Component } from "react";
import Favs from "./Favs";
import FavesContext from "../../context/FavesContext";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../../components/Loader";
import formatSessionData from "../../helpers";

class FavsContainer extends Component {
  static navigationOptions = {
    title: "Favs"
  };
  render() {
    return (
      <Query query={GET_SESSIONS}>
        {({ loading, data }) => {
          if (loading || !data) return <Loader loading={loading} />;
          return (
            <FavesContext.Consumer>
              {value => (
                <Favs
                  sessions={formatSessionData(
                    data.allSessions.filter(session =>
                      value.faveIds.includes(session.id)
                    )
                  )}
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
export default FavsContainer;
