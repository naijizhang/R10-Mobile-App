//import liraries
import React, { Component } from 'react';
import Session from "./Session";
import { withNavigation } from "react-navigation";
// create a component
class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };
    render() {
      const { navigation } = this.props;
      const item = navigation.getParam('item', 'NO-ITEM');
        return (
          <Session item={item}/>
        );
    }
}

//make this component available to the app
export default withNavigation(SessionContainer);
