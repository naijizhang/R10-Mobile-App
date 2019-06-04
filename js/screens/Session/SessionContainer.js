import React, { Component } from "react";
import Session from "./Session";
import { withNavigation } from "react-navigation";
import gql from "graphql-tag";
import Loader from "../../components/Loader";
import { Query } from "react-apollo";
import FavesContext from "../../context/FavesContext";

class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };
  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item", "NO-ITEM");
    return (
      <Query variables={{ id: item.id }} query={GET_SESSION}>
        {({ loading, data }) => {
          if (loading || !data) return <Loader loading={loading} />;
          return (
            <FavesContext.Consumer>
              {value => (
                <Session
                  item={{
                    ...item,
                    ...data.Session
                  }}
                  faveIds={value.faveIds}
                  addFave={value.addFaveSession}
                  removeFave={value.removeFaveSession}
                />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
const GET_SESSION = gql`
  query session($id: ID!) {
    Session(id: $id) {
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
`;

export default withNavigation(SessionContainer);
