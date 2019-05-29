//import liraries
import React, { Component } from "react";
import Speaker from "./Speaker";
import { withNavigation } from "react-navigation";
// create a component
class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    const speaker = navigation.getParam("speaker", "NO-SPEAKER");
    return <Speaker speaker={speaker} />;
  }
}

//make this component available to the app
export default withNavigation(SpeakerContainer);
