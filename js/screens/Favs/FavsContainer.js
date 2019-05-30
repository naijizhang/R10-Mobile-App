//import liraries
import React, { Component } from "react";
import Favs from "./Favs";
import FavesContext from "../../context/FavesContext";
// create a component
class FavsContainer extends Component {
  static navigationOptions = {
    title: "Favs"
  };
  render() {
    return (
      <FavesContext.Consumer>
        {value => <Favs faveIds={value.faveIds} />}
      </FavesContext.Consumer>
    );
  }
}
//make this component available to the app
export default FavsContainer;
